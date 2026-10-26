import { NextResponse, type NextRequest } from "next/server";
import { getApiOrigin } from "@/lib/api-origin";

const sessionCookieName = "schema_guard_session";
const sessionCookieDomain = process.env.SESSION_COOKIE_DOMAIN?.trim() || undefined;

function expireSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: sessionCookieName,
    value: "",
    domain: sessionCookieDomain,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}

export async function proxy(request: NextRequest) {
  const isLandingPage = request.nextUrl.pathname === "/";
  const sessionToken = request.cookies.get(sessionCookieName)?.value;

  if (!sessionToken) {
    return isLandingPage
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", request.url));
  }

  if (!/^[A-Za-z0-9_-]+$/.test(sessionToken)) {
    const response = isLandingPage
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", request.url));
    return expireSessionCookie(response);
  }

  let sessionResponse: Response;
  try {
    sessionResponse = await fetch(
      new URL("/api/v1/auth/me", getApiOrigin()),
      {
        headers: { cookie: `${sessionCookieName}=${sessionToken}` },
        cache: "no-store",
        redirect: "manual",
        signal: AbortSignal.timeout(5_000),
      },
    );
  } catch {
    return isLandingPage
      ? NextResponse.next()
      : NextResponse.json(
          { error: "Authentication service is unavailable." },
          { status: 503 },
        );
  }

  if (sessionResponse.status === 401 || sessionResponse.status === 403) {
    const response = isLandingPage
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", request.url));
    return expireSessionCookie(response);
  }

  if (!sessionResponse.ok) {
    return isLandingPage
      ? NextResponse.next()
      : NextResponse.json(
          { error: "Unable to verify the current session." },
          { status: 503 },
        );
  }

  let payload: unknown;
  try {
    payload = await sessionResponse.json();
  } catch {
    return NextResponse.json(
      { error: "Authentication service returned an invalid response." },
      { status: 503 },
    );
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    !("username" in payload) ||
    typeof payload.username !== "string" ||
    !payload.username
  ) {
    return NextResponse.json(
      { error: "The authenticated account has no valid username." },
      { status: 503 },
    );
  }

  const dashboardPath = `/${encodeURIComponent(payload.username)}`;
  if (isLandingPage || request.nextUrl.pathname !== dashboardPath) {
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:slug"],
};
