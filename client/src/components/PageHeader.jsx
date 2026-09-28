import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

const PageHeader = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full py-8 px-4 sm:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 bg-white/40">
      <div className="max-w-2xl">
        <div className="mb-2 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <h1 className="font-headline text-3xl sm:text-4xl font-semibold text-(--color-neutral)">
            Product Catalog
          </h1>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-(--color-secondary)/10 text-(--color-secondary) border border-(--color-secondary)/20">
            • Seller Mode Active
          </span>
        </div>
        <p className="text-xs sm:text-sm text-(--color-neutral-muted) leading-relaxed">
          Direct storefront control panel. Manage inventory thresholds, pricing, and live catalog states with single-click inline merchant actions.
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => navigate('/products/new')}
        className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-(--color-primary-hover) sm:w-auto"
      >
        <Plus className="w-4 h-4" />
        <span>Add Product</span>
      </button>
    </div>
  );
};

export default PageHeader;