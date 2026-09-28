import {
  ShoppingBag,
  Cloud,
  Mail,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  KeyRound,
  BadgeCheck
} from 'lucide-react';
import FormInput from '../components/FormInput';
import { useAuthForm } from '../hooks/authForm';


const LoginPage = () => {

  const {
    navigate,
    isSubmitting,
    register,
    handleSubmit,
    onLoginSubmit,
    errors
  } = useAuthForm()


  return (
    <>
      <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-(--color-canvas)">
        {/* Main Card Container */}
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-black/5">

          { }
          {/* LEFT PANEL: Showcase & Brand Story (Tertiary Background) */}
          <div className="w-full lg:w-[48%] bg-tertiary-var p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/60">
            <div>
              {/* Top Navigation / Brand Header */}
              <div className="flex items-center justify-between mb-10 sm:mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary-var flex items-center justify-center text-white shadow-sm">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="font-headline text-lg font-bold text-(--color-neutral) leading-none">
                      Cartwright
                    </h1>
                    <p className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mt-0.5">
                      Commerce Engine
                    </p>
                  </div>
                </div>

                {/* Live Catalog Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-xs font-medium text-blue-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  <span className="text-[11px] font-semibold text-blue-900">v2.4 Live Catalog</span>
                </div>
              </div>

              {/* Atelier Badge Tag */}
              <div className="inline-block px-2.5 py-1 rounded bg-stone-200/70 text-[10px] font-bold tracking-widest text-stone-700 uppercase mb-5">
                Cartwright Atelier
              </div>

              {/* Main Headline Quote */}
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-[31px] leading-[1.2] text-(--color-neutral) font-medium mb-4">
                “Simple goods, crafted with care. Utilitarian elegance for purposeful spaces.”
              </h2>

              {/* Body Subtitle */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-8">
                Engineered for purposeful merchants who command clarity over complexity. Unified inventory, real-time sync, and tactile craftsmanship in every order.
              </p>

              {/* Featured Vignette Showcase Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-stone-200/70 shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400"
                    alt="Ceramic Pour-Over & Stoneware Mug"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                      Featured Vignette
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      Syncing
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    Ceramic Pour-Over & Stoneware Mug
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Catalog ID #CR-882 &nbsp;•&nbsp; <span className="font-semibold text-gray-700">$48.00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Panel Stats Bar */}
            <div className="pt-8 sm:pt-10 mt-6 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 font-medium">
              <div>
                <strong className="text-stone-800 font-bold">99.98%</strong> Sync Reliability
              </div>
              <span className="text-stone-300">•</span>
              <div>
                <strong className="text-stone-800 font-bold">&lt;14ms</strong> Query Speed
              </div>
              <span className="text-stone-300">•</span>
              <div className="tracking-wider text-[10px] font-bold text-stone-400 uppercase">
                Secure-TLS
              </div>
            </div>
          </div>

          { }
          {/* RIGHT PANEL: Login Form Area (White Background) */}
          <div className="w-full lg:w-[52%] bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Top Node Indicator */}
            <div className="flex justify-end mb-8 sm:mb-12">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span>Merchant Node:</span>
                <strong className="font-semibold text-gray-800">US-East (Primary)</strong>
                <Cloud className="w-3.5 h-3.5 text-blue-600 ml-0.5" />
              </div>
            </div>

            {/* Form Container */}
            <div className="max-w-md w-full mx-auto my-auto">
              <div className="mb-8">
                <h2 className="font-headline text-3xl sm:text-4xl text-(--color-neutral) font-medium mb-2">
                  Welcome back
                </h2>
                <p className="text-sm text-gray-500">
                  Sign in to access your catalog and inventory.
                </p>
              </div>

              <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">

                {/* Email Address Input */}
                <FormInput
                  label="EMAIL ADDRESS"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="merchant@cartwright.store"
                  icon={Mail}
                  register={register}
                  rules={{
                    setValueAs: (value) => value.trim(),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  }}
                  error={errors.email?.message}
                />

                {/* Password Input */}
                <FormInput
                  label="PASSWORD"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••••••"
                  icon={KeyRound}
                  minLength={6}
                  register={register}
                  rightElement={true}
                  rules={{
                    setValueAs: (value) => value.trim(),
                  }}
                  error={errors.password?.message}
                />

                {/* Status / TLS Row (No 'Stay signed in' checkbox as requested) */}
                <div className="flex items-center justify-end py-1">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>256-bit TLS</span>
                  </div>
                </div>

                {/* Primary Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-orange-600/15 transition-all duration-150 hover:opacity-95 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-75"
                >
                  <span aria-live="polite">{isSubmitting ? 'Signing in...' : 'Sign In'}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>

              {/* Registration Helper Link */}
              <div className="mt-8 text-center border-t border-gray-100 pt-6">
                <p className="text-xs text-gray-500">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/register')}
                    className="font-bold text-secondary-var hover:underline inline-flex items-center gap-0.5 ml-1 cursor-pointer"
                  >
                    Create an account
                    <ExternalLink className="w-3 h-3 inline-block" />
                  </button>
                </p>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="pt-8 mt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-(--color-primary)"></span>
                <span>Cartwright Commerce • Encrypted & Secure</span>
              </div>
              <div className="flex items-center gap-3 font-medium text-gray-500">
                <button
                  className="hover:text-gray-800 transition-colors"
                >
                  Privacy
                </button>
                <span>-</span>
                <button
                  className="hover:text-gray-800 transition-colors"
                >
                  Terms of Ops
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

export default LoginPage