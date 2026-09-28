import { LogOut } from 'lucide-react';
import { useNav } from '../hooks/useNav';

const Navbar = () => {

  const { role, firstName, isLoading, signOutFunc } = useNav()

  return (
    <header className="flex w-full items-center justify-between gap-2 border-b border-black/5 bg-white px-3 py-2.5 sm:px-8 sm:py-3">
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <div className="flex shrink-0 items-center gap-1 font-bold text-lg tracking-tight sm:text-xl">
          <span className="text-xl font-black text-(--color-secondary) sm:text-2xl">C</span>
          <span className="text-xl font-light text-(--color-primary) sm:text-2xl">|</span>
          <span className="ml-1 font-headline text-(--color-neutral)">Cartwright</span>
        </div>
        <span className="hidden sm:inline-block text-xs font-medium text-(--color-neutral-muted) bg-black/5 px-2.5 py-1 rounded-full">
          Catalog
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-4">
        {/* Active Mode Pill */}
        {
          role === 'seller' && (
            <div className="flex items-center gap-1.5 rounded-full bg-(--color-secondary)/10 px-1.5 py-1 text-xs font-semibold text-(--color-secondary) sm:px-3">
              <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-(--color-secondary) sm:size-2"></span>
              <span className="hidden sm:inline">Seller Mode Active</span>
              <span className="sr-only sm:hidden">Seller mode active</span>
            </div>
          )
        }

        {/* Account Link */}
        <div className="flex min-w-0 items-center gap-1.5 border-l border-black/10 pl-2 sm:gap-2.5 sm:pl-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary-var text-[11px] font-bold text-white shadow-sm">
            {firstName.charAt(0).toUpperCase()}
          </span>
          <span className="hidden max-w-12 truncate text-xs font-semibold text-neutral-var min-[400px]:inline sm:max-w-36 sm:text-sm" title={firstName}>
            {firstName}
          </span>
        </div>

        <button
          onClick={signOutFunc}
          disabled={isLoading}
          aria-label={isLoading ? 'Signing out' : 'Sign out'}
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-(--color-primary)/20 px-2 py-2 text-xs font-semibold text-neutral-var transition-colors hover:border-(--color-primary)/40 hover:bg-(--color-primary)/5 hover:text-primary-var disabled:pointer-events-none disabled:opacity-60 sm:gap-2 sm:px-3"
        >
          <LogOut className="size-3.5 text-primary-var" />
          <span className="hidden sm:inline">
            {isLoading ? 'Signing out…' : 'Sign out'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;