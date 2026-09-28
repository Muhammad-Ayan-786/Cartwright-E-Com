import { ArrowUpRight, Package, ShoppingBag, Sparkles } from "lucide-react"

const AuthLoading = () => (
  <main className="fixed inset-0 z-50 isolate flex min-h-svh flex-col overflow-hidden bg-secondary-var px-5 py-5 pb-6 text-(--color-tertiary) sm:px-10 sm:py-8 lg:px-[6vw] lg:py-12" role="status" aria-live="polite">
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 bg-[linear-gradient(rgba(243,239,234,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,234,0.16)_1px,transparent_1px)] bg-size-[52px_52px] mask-[linear-gradient(90deg,#000,transparent_88%)]" aria-hidden="true" />
    <header className="flex items-center justify-between">
      <a className="inline-flex items-center gap-2.5 text-[15px] font-extrabold text-(--color-tertiary) no-underline" href="/" aria-label="Cartwright home">
        <span className="grid size-8.5 rotate-[-8deg] place-items-center bg-tertiary-var text-secondary-var"><ShoppingBag size={18} strokeWidth={2.4} /></span>
        CARTWRIGHT<span className="text-primary-var">.</span>
      </a>
      <span className="flex items-center gap-2 text-[7px] font-bold tracking-[.08em] text-[#c5c9d2] sm:text-[9px] sm:tracking-[.14em]"><span className="size-1.75 animate-auth-pulse rounded-full bg-primary-var shadow-[0_0_13px_var(--color-primary)] motion-reduce:animate-none" /> THE GOOD STUFF IS MOVING</span>
    </header>

    <section className="mx-auto grid w-full flex-1 grid-cols-1 content-center items-center gap-0 sm:max-w-280 sm:grid-cols-[1fr_.92fr] sm:gap-[clamp(16px,4vw,70px)]" aria-label="Loading your store">
      <div className="relative mx-auto aspect-square w-[min(66vw,330px)] sm:w-[min(100%,530px)]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 size-[91%] -translate-x-1/2 -translate-y-1/2 animate-auth-orbit rounded-full border border-[rgba(243,239,234,0.23)] motion-reduce:animate-none" />
        <div className="absolute left-1/2 top-1/2 size-[69%] -translate-x-1/2 -translate-y-1/2 animate-auth-orbit-reverse rounded-full border border-dashed border-[rgba(224,83,56,0.65)] motion-reduce:animate-none" />
        <span className="absolute left-[26%] top-[6%] grid size-9.5 animate-auth-float rotate-12 place-items-center bg-tertiary-var text-primary-var motion-reduce:animate-none"><Sparkles size={16} /></span>
        <span className="absolute bottom-[27%] right-[2%] grid size-9.5 animate-auth-float-reverse rotate-[-11deg] place-items-center bg-primary-var text-(--color-tertiary) motion-reduce:animate-none"><ArrowUpRight size={17} /></span>
        <div className="absolute right-[11%] top-[13%] grid size-23 animate-auth-wiggle place-content-center bg-tertiary-var text-center text-[11px] font-black leading-[1.05] text-secondary-var [clip-path:polygon(50%_0%,61%_12%,77%_5%,82%_22%,100%_27%,91%_43%,100%_57%,84%_66%,88%_84%,68%_85%,58%_100%,45%_87%,28%_97%,22%_79%,4%_73%,13%_56%,0%_42%,16%_31%,12%_13%,33%_15%)] motion-reduce:animate-none">GOOD<br />THINGS<br /><b>INSIDE</b></div>
        <div className="absolute left-[23%] top-1/4 z-10 h-[52%] w-[54%] animate-auth-bob filter-[drop-shadow(16px_23px_0_rgba(0,0,0,0.2))] motion-reduce:animate-none">
          <div className="absolute inset-x-0 bottom-0 top-[19%] flex items-center justify-center overflow-hidden bg-primary-var [clip-path:polygon(0_0,72%_0,100%_18%,100%_100%,0_100%)]">
            <span className="absolute left-[31%] top-0 h-full w-[13%] origin-top skew-y-28 bg-tertiary-var opacity-90" />
            <span className="absolute left-1/4 top-[35%] z-10 grid size-13.75 rotate-[-8deg] place-items-center bg-tertiary-var text-secondary-var"><Package size={34} strokeWidth={1.6} /></span>
            <span className="absolute bottom-[9%] right-[8%] z-10 -rotate-90 text-[8px] font-extrabold leading-tight tracking-[.08em] text-(--color-tertiary)">HANDLE<br />WITH JOY</span>
          </div>
          <div className="absolute left-0 top-0 z-10 h-[20%] w-[72%] bg-(--color-primary-hover) [clip-path:polygon(0_0,72%_0,100%_100%,29%_100%)]" />
          <div className="absolute right-0 top-[19%] z-10 h-[81%] w-[28%] bg-(--color-secondary-hover)" />
        </div>
        <span className="absolute left-[9%] top-[27%] animate-auth-twinkle text-[32px] text-tertiary-var motion-reduce:animate-none">✳</span>
        <span className="absolute bottom-[21%] right-[12%] animate-auth-twinkle text-[25px] text-primary-var [animation-delay:400ms] motion-reduce:animate-none">✦</span>
        <span className="absolute bottom-[17%] left-1/4 animate-auth-twinkle text-[20px] text-[#b8d9d2] [animation-delay:800ms] motion-reduce:animate-none">✳</span>
        <div className="absolute bottom-[20%] left-[13%] right-[13%] h-3.25 animate-auth-shadow rounded-[50%] bg-black/40 blur-sm motion-reduce:animate-none" />
      </div>

      <div className="mx-auto w-full max-w-107.5 animate-auth-enter px-0 py-4 sm:max-w-none">
        <p className="mb-3 text-[9px] font-bold tracking-[.14em] text-primary-var sm:mb-4.75">JUST A LITTLE ANTICIPATION</p>
        <h1 className="m-0 font-headline text-[clamp(43px,12vw,64px)] font-medium leading-[.94] text-(--color-tertiary) sm:text-[clamp(44px,6vw,78px)]">
          We're getting<br /><em className="font-normal text-primary-var">your good stuff</em><br />together.
        </h1>
        <div className="mt-6 grid grid-cols-[minmax(50px,1fr)_auto_auto] items-center gap-2 sm:mt-[clamp(28px,5vh,54px)] sm:grid-cols-[minmax(90px,1fr)_auto_auto] sm:gap-3" aria-hidden="true">
          <span className="h-1.25 overflow-hidden bg-[rgba(243,239,234,0.16)]"><span className="block h-full w-[34%] animate-auth-progress bg-primary-var motion-reduce:animate-none" /></span>
          <span className="whitespace-nowrap text-[7px] font-bold tracking-[.08em] text-[#c5c9d2] sm:text-[8px] sm:tracking-[.14em]">UNPACKING THE GOODNESS</span>
          <span className="animate-auth-dots text-[17px] font-bold leading-none text-primary-var motion-reduce:animate-none">···</span>
        </div>
      </div>
    </section>

    <footer className="flex items-center justify-between border-t border-[rgba(243,239,234,0.2)] pt-3.25 text-[7px] font-bold tracking-[.08em] text-[#c5c9d2] sm:text-[8px] sm:tracking-[.14em]">
      <span>CURATED WITH CARE <b className="px-1 text-primary-var">✳</b> DELIVERED WITH A LITTLE DRAMA</span>
      <span className="hidden text-primary-var min-[381px]:inline">CW—001 / PLEASE HOLD</span>
    </footer>
    <span className="sr-only">Loading your account</span>
  </main>
)

export default AuthLoading