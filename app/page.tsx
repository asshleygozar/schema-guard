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
            <span>Schema Guard</span>
          </a>

          <div className="flex items-center gap-8 max-sm:gap-3.5">
            {["Home", "About", "Footer"].map((link) => (
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
          className="relative grid min-h-[min(730px,calc(100svh-76px))] place-items-center overflow-hidden px-6 py-24 text-center max-md:min-h-[min(660px,calc(100svh-66px))] max-md:py-20 max-sm:min-h-[min(640px,calc(100svh-66px))] max-sm:px-5"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="pointer-events-none absolute left-1/2 top-[5%] -z-0 aspect-square w-[min(760px,95vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(117,104,219,0.1)_0%,rgba(171,163,239,0.05)_42%,transparent_70%)]" />
          <div className="relative z-[1] w-full max-w-[740px] animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
            <div className="mb-7 inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.015em] text-[#6c6885] max-sm:mb-[22px] max-sm:text-[10px]">
              <span className="size-[7px] rounded-full bg-[#8980db] shadow-[0_0_0_4px_rgba(137,128,219,0.12)]" />
              A calmer way to manage schema changes
            </div>
            <h1
              className="m-0 text-[clamp(46px,7.2vw,78px)] font-semibold leading-[1.07] tracking-[-0.075em] text-[#201f2c] max-sm:text-[clamp(43px,12vw,56px)]"
              id="hero-title"
            >
              Your database changes,
              <br className="max-sm:hidden" />{" "}
              <span className="text-[#7770c9]">with guardrails.</span>
            </h1>
            <p className="mx-auto mb-[30px] mt-6 max-w-[500px] text-base leading-[1.8] text-[#727084] max-md:text-sm max-sm:mb-[25px] max-sm:mt-5 max-sm:text-[13px]">
              Review schema changes with clarity. Catch the risks, understand
              the impact, and ship your migrations with confidence.
            </p>
            {/* OAuth uses a full-page navigation to follow the API redirect. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-[11px] rounded-xl bg-[#27253a] px-5 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3657] hover:shadow-[0_8px_24px_rgba(39,37,58,0.16)]"
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
            <p className="mt-3 text-[11px] text-[#9794a7]">
              Secure sign-in with your GitHub account
            </p>
          </div>
          <a
            className="absolute bottom-[38px] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 text-[11px] text-[#8b889b] no-underline transition-colors hover:text-indigo-700"
            href="#about"
          >
            <span>Get to know Schema Guard</span>
            <ArrowDown aria-hidden="true" size={15} />
          </a>
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
                Clarity at every <span className="text-[#7770c9]">step.</span>
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
            <span>Schema Guard</span>
          </a>
          <div className="flex items-center gap-[5px] text-[11px] text-[#8b889b]">
            <span>Made with care by</span>
            <strong className="font-medium text-[#514e65]">Your Name</strong>
          </div>
          <div
            className="flex items-center gap-[22px] max-sm:w-full max-sm:justify-between max-sm:border-t max-sm:border-[#221f4112] max-sm:pt-3"
            aria-label="Social links"
          >
            {[
              ["Portfolio", "https://your-portfolio.com"],
              ["GitHub", "https://github.com/yourusername"],
              ["X", "https://x.com/yourusername"],
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
