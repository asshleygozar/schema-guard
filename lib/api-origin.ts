export function getApiOrigin() {
  const configuredOrigin = process.env.NEXT_PUBLIC_API_ORIGIN?.trim();

  if (!configuredOrigin) {
    throw new Error("NEXT_PUBLIC_API_ORIGIN must be set to the API server origin.");
  }

  let url: URL;
  try {
    url = new URL(configuredOrigin);
  } catch {
    throw new Error("NEXT_PUBLIC_API_ORIGIN must be a valid absolute URL.");
  }

  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_API_ORIGIN must contain only an HTTP(S) origin, without a path or credentials.",
    );
  }

  if (process.env.NODE_ENV === "production" && url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_API_ORIGIN must use HTTPS in production.");
  }

  return url.origin;
}
