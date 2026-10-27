import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  GitPullRequest,
  ShieldCheck,
} from "lucide-react";
import { getApiOrigin } from "@/lib/api-origin";

const highlights = [
  {
    title: "See every change",
    description: "Understand what changed in your schema at a glance.",
    icon: Braces,
    color: "bg-indigo-100 text-indigo-600",
    background: "from-indigo-100 to-violet-50",
    label: "SCHEMA DIFF",
    detail: "+ users.email_verified",
  },
  {
    title: "Know what matters",
    description: "Surface the risks before they reach production.",
    icon: ShieldCheck,
    color: "bg-orange-100 text-orange-600",
    background: "from-orange-100 to-rose-50",
    label: "RISK ANALYSIS",
    detail: "Low risk · no breaking changes",
  },
  {
    title: "Ship with confidence",
    description: "Get clear context for your next migration.",
    icon: GitPullRequest,
    color: "bg-emerald-100 text-emerald-700",
    background: "from-emerald-100 to-teal-50",
    label: "READY FOR REVIEW",
    detail: "Migration checks passed",
  },
];

const githubMark = (
  <svg
    aria-hidden="true"
    width="19"
    height="19"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaff] text-[#171626]">
      <header className="sticky top-0 z-10 border-b border-[#221f410f] bg-[#fbfaff]/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-[4.75rem] w-[min(1120px,calc(100%-48px))] items-center justify-between max-sm:min-h-[4.125rem] max-sm:w-[calc(100%-32px)]"
          aria-label="Main navigation"
        >
          <a
            className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.035em] text-[#25233b] no-underline max-sm:gap-1.5 max-sm:text-[13px]"
            href="#home"
            aria-label="Schema Guard home"
          >
            <Image
              src="/images/schema_guard_logo.svg"
              alt=""
              width={38}
              height={38}
              priority
              className="object-contain max-sm:size-8"
            />
            <span className="font-bold tracking-tight">
              <span className="text-[#25233b]">Schema</span>{" "}
              <span className="text-indigo-600">Guard</span>
            </span>
          </a>

          <div className="flex items-center gap-8 max-sm:gap-3.5">
            {["Home", "About"].map((link) => (
              <a
                className="text-[13px] font-medium text-[#656377] no-underline transition-colors hover:text-indigo-700 max-sm:text-[11px]"
                href={`#${link.toLowerCase()}`}
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative overflow-hidden px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 max-sm:px-4"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 aspect-[16/9] w-[min(1160px,100vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,rgba(165,180,252,0.05)_45%,transparent_70%)] blur-2xl" />

          <div className="mx-auto w-[min(1120px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
              {/* Left Column: Heading, description, actions, feature badges */}
              <div className="flex flex-col items-start text-left lg:col-span-7">
                

                <h1
                  className="m-0 text-[clamp(38px,5vw,62px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#201f2c] max-sm:text-[clamp(34px,10vw,46px)]"
                  id="hero-title"
                >
                  Your database changes,
                  <br />
                  <span className="text-indigo-600">with guardrails.</span>
                </h1>

                <p className="mt-5 mb-8 max-w-[520px] text-base leading-[1.75] text-[#6b6880] max-md:text-[15px] max-sm:mb-6 max-sm:mt-4 max-sm:text-[14px]">
                  Review schema changes with clarity. Catch the risks, understand
                  the impact, and ship your migrations with confidence.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 max-sm:w-full">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    className="inline-flex min-h-[50px] items-center justify-center gap-[11px] rounded-xl bg-[#27253a] px-5 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#393554] hover:shadow-[0_8px_24px_rgba(39,37,58,0.16)] max-sm:w-full"
                    href={`${getApiOrigin()}/api/v1/auth/github/login`}
                  >
                    {githubMark}
                    Continue with GitHub
                    <ArrowRight
                      className="ml-1 text-[#c5c1ee]"
                      aria-hidden="true"
                      size={17}
                    />
                  </a>
                  <a
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#221f4118] bg-white/70 px-4 text-sm font-medium text-[#535069] transition duration-200 hover:bg-white hover:text-indigo-700 hover:border-indigo-200 max-sm:w-full"
                    href="#about"
                  >
                    <span>How it works</span>
                    <ArrowDown className="text-[#8c88a4]" aria-hidden="true" size={15} />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive-style UI Preview Card */}
              <div className="relative lg:col-span-5">
                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/15 via-violet-500/10 to-transparent blur-xl" />
                
                <div className="relative overflow-hidden rounded-2xl border border-[#221f4115] bg-white/95 p-5 shadow-[0_20px_50px_rgba(33,29,66,0.08)] backdrop-blur-xl sm:p-6">
                  {/* Top bar with traffic lights */}
                  <div className="flex items-center justify-between border-b border-[#f1f0f6] pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-[#f4a7a7]" />
                      <span className="size-2.5 rounded-full bg-[#fbd38d]" />
                      <span className="size-2.5 rounded-full bg-[#9ae6b4]" />
                      <span className="ml-2 font-mono text-[11px] font-medium text-[#797591]">
                        pull/142 · schema.sql
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Safe to Merge
                    </span>
                  </div>

                  {/* Schema diff display */}
                  <div className="mt-4 font-mono text-xs">
                    <div className="rounded-lg bg-[#f8f7fd] p-3 text-[11px] leading-[1.7] text-[#423f5b]">
                      <div className="mb-1 text-[9px] font-semibold font-sans uppercase tracking-wider text-[#918da5]">
                        Live Schema Diff
                      </div>
                      <div className="text-[#595570]">
                        <span className="select-none text-[#a5a1bb]">1 </span>
                        <span className="font-semibold text-indigo-600">ALTER TABLE</span> users
                      </div>
                      <div className="my-0.5 -mx-1 rounded bg-emerald-100/70 px-1.5 text-emerald-900">
                        <span className="select-none font-semibold text-emerald-600">+ </span>
                        ADD COLUMN email_verified BOOLEAN DEFAULT false;
                      </div>
                      <div className="my-0.5 -mx-1 rounded bg-emerald-100/70 px-1.5 text-emerald-900">
                        <span className="select-none font-semibold text-emerald-600">+ </span>
                        ADD COLUMN verified_at TIMESTAMP;
                      </div>
                      <div className="text-[#595570]">
                        <span className="select-none text-[#a5a1bb]">4 </span>
                        <span className="font-semibold text-indigo-600">CREATE INDEX</span> idx_users_email ON users(email);
                      </div>
                    </div>
                  </div>

                  {/* Guardrail metrics preview */}
                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-violet-50/40 p-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-indigo-600" />
                        <span className="text-[11px] font-semibold text-[#322f4b]">Risk Score</span>
                      </div>
                      <div className="mt-1.5 flex items-baseline gap-1.5">
                        <span className="text-lg font-bold text-indigo-700">98</span>
                        <span className="text-[10px] text-[#7d7994]">/ 100 (Safe)</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-teal-50/40 p-3">
                      <div className="flex items-center gap-2">
                        <GitPullRequest className="size-4 text-emerald-600" />
                        <span className="text-[11px] font-semibold text-[#322f4b]">Lock Impact</span>
                      </div>
                      <div className="mt-1.5 flex items-baseline gap-1.5">
                        <span className="text-lg font-bold text-emerald-700">&lt; 1ms</span>
                        <span className="text-[10px] text-[#7d7994]">Zero lock contention</span>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </div> 
          </div>
        </section>

        <section
          className="border-t border-[#221f410f] px-6 py-24 max-md:px-0 max-md:py-[76px] max-sm:pt-16"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="mx-auto mb-[34px] flex w-full max-w-[1120px] items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-6">
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-[#817ba7]">
                BUILT FOR BETTER CHANGES
              </p>
              <h2
                className="m-0 text-[clamp(30px,4vw,42px)] font-medium leading-[1.15] tracking-[-0.06em] text-[#25233b] max-sm:text-[32px]"
                id="about-title"
              >
                Clarity at every <span className="text-indigo-600">step.</span>
              </h2>
            </div>
            <p className="mb-1 max-w-[310px] text-[13px] leading-[1.7] text-[#777487]">
              The details you need to make your next database change a good one.
            </p>
          </div>

          <div
            className="mx-auto grid w-full max-w-[1124px] grid-flow-col auto-cols-fr gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-0.5 pb-3 scrollbar-thin scrollbar-thumb-[#d9d6eb] scrollbar-track-transparent focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8c83d5] max-md:mx-0 max-md:w-full max-md:auto-cols-[minmax(260px,76%)] max-md:gap-3.5 max-md:px-6 max-md:[scrollbar-width:none] max-sm:auto-cols-[84%]"
            role="region"
            aria-label="Schema Guard features"
            tabIndex={0}
          >
            {highlights.map(
              ({ title, description, icon: Icon, color, background, label, detail }) => (
                <article className="min-w-0 snap-start" key={title}>
                  <div
                    className={`grid min-h-[245px] place-items-center overflow-hidden rounded-[18px] border border-[#433c110f] bg-gradient-to-br ${background} p-[26px] transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(44,39,83,0.09)] max-sm:min-h-[215px] max-sm:p-5`}
                    role="img"
                    aria-label={label}
                  >
                    <div className="w-full max-w-[310px] overflow-hidden rounded-xl border border-[#453e720f] bg-white/85 shadow-[0_14px_34px_rgba(49,44,84,0.08)]">
                      <div className="flex h-[38px] items-center gap-[5px] border-b border-[#f0eff5] px-3">
                        <span className="size-1.5 rounded-full bg-[#d9d6e5]" />
                        <span className="size-1.5 rounded-full bg-[#d9d6e5]" />
                        <span className="size-1.5 rounded-full bg-[#d9d6e5]" />
                        <span className="ml-2 text-[8px] font-semibold tracking-[0.09em] text-[#9b98aa]">
                          {label}
                        </span>
                      </div>
                      <div className="flex min-h-[72px] items-center gap-3 px-3.5">
                        <span
                          className={`grid size-[34px] shrink-0 place-items-center rounded-[10px] ${color}`}
                        >
                          <Icon
                            aria-hidden="true"
                            size={19}
                            strokeWidth={1.8}
                          />
                        </span>
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-medium text-[#4e4b60]">
                          {detail}
                        </span>
                        <ArrowUpRight
                          className="ml-auto shrink-0 text-[#aaa7b9]"
                          aria-hidden="true"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-[3px] pt-[17px]">
                    <h3 className="mb-1.5 text-[15px] font-semibold tracking-[-0.025em] text-[#2d2b40]">
                      {title}
                    </h3>
                    <p className="m-0 text-xs leading-[1.65] text-[#777487]">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
          <p className="mt-[18px] hidden text-center text-[11px] text-[#8b889b] max-md:block">
            <span className="px-1.5 text-[#7770c9]" aria-hidden="true">
              ←
            </span>
            Swipe to explore
            <span className="px-1.5 text-[#7770c9]" aria-hidden="true">
              →
            </span>
          </p>
        </section>
      </main>

      <footer
        className="border-t border-[#221f4112] bg-[#f7f6fb]"
        id="footer"
      >
        <div className="mx-auto flex min-h-[105px] w-[min(1120px,calc(100%-48px))] items-center justify-between gap-6 max-md:min-h-[130px] max-md:w-[min(100%-36px,600px)] max-md:flex-wrap max-md:gap-x-[18px] max-md:gap-y-2.5 max-md:py-[22px] max-sm:w-[calc(100%-32px)]">
          <a
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[-0.035em] text-[#25233b] no-underline max-sm:gap-1.5"
            href="#home"
          >
            <Image
              src="/images/schema_guard_logo.svg"
              alt=""
              width={34}
              height={34}
              className="object-contain max-sm:size-8"
            />
            <span className="font-bold tracking-tight">
              <span className="text-[#25233b]">Schema</span>{" "}
              <span className="text-indigo-600">Guard</span>
            </span>
          </a>
          <div className="flex items-center gap-[5px] text-[11px] text-[#8b889b]">
            <span>Made with care by</span>
            <strong className="font-medium text-[#514e65]">Asshley Gozar</strong>
          </div>
          <div
            className="flex items-center gap-[22px] max-sm:w-full max-sm:justify-between max-sm:border-t max-sm:border-[#221f4112] max-sm:pt-3"
            aria-label="Social links"
          >
            {[
              ["Portfolio", "https://www.asshleygozar.tech"],
              ["GitHub", "https://github.com/asshleygozar"],
              ["X", "https://x.com/sarani_muko_e"],
            ].map(([label, href]) => (
              <a
                className="inline-flex items-center gap-[3px] text-[11px] font-medium text-[#656377] no-underline transition-colors hover:text-indigo-700"
                href={href}
                target="_blank"
                rel="noreferrer"
                key={label}
              >
                {label}
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
