import {
  LayoutGrid,
  Check,
  Zap,
  ArrowRight,
  Shield,
  UserRound,
  Mail,
  KeyRound,
  BadgeCheck,
} from 'lucide-react';
import FormInput from '../components/FormInput';
import { useAuthForm } from '../hooks/authForm';

const CreateAccount = () => {

  const {
    navigate,
    isSubmitting,
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
  } = useAuthForm()


  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 bg-(--color-tertiary) font-body text-(--color-neutral) selection:bg-(--color-primary) selection:text-white">
      {/* Main Split Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5 flex flex-col lg:flex-row">

        {/* LEFT COLUMN: Hero / Value Proposition */}
        <div className="w-full lg:w-1/2 bg-(--color-tertiary) p-8 sm:p-10 md:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-black/5">
          <div>
            {/* Top Header & Brand Badge */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-(--color-primary) flex items-center justify-center text-white shadow-sm">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <span className="font-headline text-2xl font-bold tracking-tight text-(--color-neutral)">
                  Cartwright
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/5 text-(--color-neutral)/70 border border-black/5">
                Craft Commerce
              </span>
            </div>

            {/* Sub-header tagline */}
            <div className="text-[11px] font-bold tracking-widest uppercase text-(--color-primary) mb-3">
              Speed Over Configuration
            </div>

            {/* Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] font-normal text-(--color-neutral) mb-4">
              Start showcasing your craftsmanship in minutes.
            </h1>

            {/* Description */}
            <p className="text-sm text-(--color-neutral)/70 leading-relaxed mb-8 max-w-md">
              A minimalist platform for makers, studios, and independent merchants.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-10">
              {[
                'Single unified catalog view',
                'Inline seller controls & quick inventory',
                'Instant checkout-free setup'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-(--color-neutral)/80">
                  <span className="w-5 h-5 rounded-full bg-(--color-primary)/15 text-(--color-primary) flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setup Latency Widget */}
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-black/5 shadow-sm flex items-center justify-between mt-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-(--color-neutral)/50 mb-1">
                Average Setup Latency
              </div>
              <div className="font-headline text-2xl font-semibold text-(--color-neutral)">
                2m 40s
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-(--color-secondary)/10 text-(--color-secondary)">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Live benchmark</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sign Up Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12 bg-white flex flex-col">
          <div>
            {/* Form Title & Subtitle */}
            <div className="mb-8">
              <h2 className="font-headline text-3xl font-medium text-(--color-neutral) mb-2">
                Create account
              </h2>
              <p className="text-sm text-(--color-neutral)/60">
                Join Cartwright to manage and showcase your products.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-5">
              {/* Full Name */}
              <FormInput
                label="NAME"
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Maya Lin"
                icon={UserRound}
                register={register}
                minLength={2}
                maxLength={50}
                rules={{
                  setValueAs: (value) => value.trim(),
                  pattern: {
                    value: /^[\p{L}][\p{L}\s'-]*$/u,
                    message: 'Name can contain letters, spaces, hyphens, and apostrophes only',
                  },
                }}
                error={errors.name?.message}
              />

              {/* Email Address */}
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

              {/* Password */}
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

              {/* Confirm Password */}
              <FormInput
                label="CONFIRM PASSWORD"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                icon={BadgeCheck}
                minLength={6}
                register={register}
                rightElement={true}
                rules={{
                  setValueAs: (value) => value.trim(),
                  validate: (value, values) =>
                    value === values.password || 'Passwords do not match',
                }}
                error={errors.confirmPassword?.message}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 bg-(--color-primary) hover:opacity-95 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer shadow-orange-600/15  duration-150 active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none
                "
              >
                <span>{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Switch to Sign In link */}
            <div className="text-center mt-6">
              <p className="text-xs text-(--color-neutral)/60">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/')}
                  className="font-semibold text-(--color-neutral) hover:underline cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>

          {/* Bottom Security Badge */}
          <div className="flex items-center justify-center gap-2 mt-10 pt-6 border-t border-black/5">
            <Shield className="w-3.5 h-3.5 text-(--color-neutral)/40" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-(--color-neutral)/40">
              End-to-End Encrypted Merchant Ledger
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;