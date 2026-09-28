const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5 py-8 px-4 sm:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-(--color-neutral-muted)">
          <span className="font-headline text-base font-bold text-(--color-neutral)">
            Cartwright
          </span>
          <span className="hidden sm:inline text-black/20">•</span>
          <span>© 2024 Cartwright Commerce. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-(--color-neutral-muted)">
          <button type="button" className="hover:text-(--color-neutral) transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <button type="button" className="hover:text-(--color-neutral) transition-colors cursor-pointer">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;