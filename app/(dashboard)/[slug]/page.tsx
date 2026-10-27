import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GitBranch,
  History,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { SignOutButton } from "@/components/sign-out-button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Schema changes", href: "#schema-changes", icon: GitBranch },
  { label: "Migration history", href: "#migration-history", icon: History },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SidebarProvider className="flex-col">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b bg-background/95 px-4 backdrop-blur sm:px-6">
        <Link
          href="#overview"
          className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight"
          aria-label="Schema Guard dashboard"
        >
          <Image
            src="/images/schema_guard_logo.svg"
            alt=""
            width={34}
            height={34}
            priority
          />
          <span className="hidden sm:inline">Schema Guard</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map(({ label, href }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink href={href}>{label}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2.5">
          <div className="text-right leading-tight">
            <p className="text-xs text-muted-foreground">{getGreeting()},</p>
            <p className="max-w-32 truncate text-sm font-medium sm:max-w-48">
              {slug}
            </p>
          </div>
          <div
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
            aria-label={`${slug}'s avatar`}
            role="img"
          >
            {slug.slice(0, 2).toUpperCase()}
          </div>
          <SignOutButton />
          <SidebarTrigger className="ml-1 lg:hidden" />
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <Sidebar
          collapsible="icon"
          className="md:!top-16 md:!h-[calc(100svh-4rem)]"
        >
          <SidebarHeader className="px-4 pt-5">
            <p className="text-xs font-medium text-sidebar-foreground/60">
              WORKSPACE
            </p>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Workspace</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map(({ label, href, icon: Icon }, index) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton
                        render={<Link href={href} />}
                        isActive={index === 0}
                        tooltip={label}
                      >
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <p className="text-xs leading-relaxed text-sidebar-foreground/60">
              Safer schema changes, from review to release.
            </p>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="min-h-[calc(100svh-4rem)] bg-muted/30">
          <main className="mx-auto w-full max-w-6xl space-y-6 p-4 sm:p-8">
            <section
              id="overview"
              className="rounded-xl border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck aria-hidden="true" size={25} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                GitHub connected as {slug}
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Welcome to your dashboard
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Your Schema Guard workspace is ready. Schema insights and
                migration history will appear here as they become available.
              </p>
            </section>

            <div className="grid gap-4 md:grid-cols-2">
              <section
                id="schema-changes"
                className="rounded-xl border bg-card p-5"
              >
                <div className="flex items-center gap-2 font-medium">
                  <GitBranch aria-hidden="true" className="size-4 text-primary" />
                  Schema changes
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schema change insights will appear here.
                </p>
              </section>
              <section
                id="migration-history"
                className="rounded-xl border bg-card p-5"
              >
                <div className="flex items-center gap-2 font-medium">
                  <History aria-hidden="true" className="size-4 text-primary" />
                  Migration history
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your migration history will appear here.
                </p>
              </section>
            </div>
            <a
              href={`https://github.com/${encodeURIComponent(slug)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              View GitHub profile <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
