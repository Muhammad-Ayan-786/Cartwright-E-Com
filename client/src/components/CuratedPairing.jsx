const CuratedPairing = () => {
  return (
    <div className="w-full mt-12 mb-8 bg-white p-6 sm:p-8 rounded-3xl border border-black/5 shadow-xs">
      <div className="text-[11px] font-bold tracking-widest uppercase text-(--color-primary) mb-1">
        Curated Pairing
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="font-headline text-2xl sm:text-3xl font-medium text-(--color-neutral) mb-2">
            Complete the Wardrobe Set
          </h2>
          <p className="text-xs sm:text-sm text-(--color-neutral-muted) max-w-xl">
            Tailored relaxed suit pants engineered to pair seamlessly with our unstructured relaxed blazer.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-(--color-tertiary)/30 p-3 pr-5 rounded-2xl border border-black/5 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=300"
            alt="Paired Item"
            className="w-16 h-16 rounded-xl object-cover border border-black/5"
          />
          <div>
            <h4 className="font-headline text-sm font-semibold text-(--color-neutral)">
              Unstructured Studio Blazer
            </h4>
            <div className="text-xs font-semibold text-(--color-primary) mb-1">
              R 280.00 <span className="text-[10px] text-(--color-neutral-muted) font-normal">ZAR</span>
            </div>
            <button
              type="button"
              className="text-xs font-semibold px-3 py-1 bg-white hover:bg-black/5 text-(--color-neutral) rounded-lg border border-black/10 transition-colors cursor-pointer"
            >
              View Pair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratedPairing;