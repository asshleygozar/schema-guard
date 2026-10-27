import Image from "next/image";
import Link from "next/link";
import {
  GitBranch,
  History,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { ProfileFooter } from "@/components/dashboard/profile-footer";
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
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Schema changes", href: "#schema-changes", icon: GitBranch },
  { label: "Migration history", href: "#migration-history", icon: History },
];

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b px-3 py-3.5">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                render={<Link href="#overview" />}
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg">
                  <Image
                    src="/images/schema_guard_logo.svg"
                    alt="Schema Guard"
                    width={32}
                    height={32}
                    priority
                    className="shrink-0"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold tracking-tight text-[#25233b]">
                    <span>Schema</span> <span className="text-indigo-600">Guard</span>
                  </span>
                  <span className="text-[11px] text-muted-foreground">Database Guardrails</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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

        <SidebarFooter className="border-t p-3 group-data-[collapsible=icon]:p-2">
          <ProfileFooter slug={slug} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset className="min-h-svh bg-muted/30">
        <div className="p-3 md:hidden">
          <SidebarTrigger />
        </div>
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
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
