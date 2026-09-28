import { useAllProducts } from '../hooks/useProducts';
import { PackageOpen } from 'lucide-react';
import ProductCard from './ProductCard';

// Skeleton UI for Product Card
const ProductCardSkeleton = () => (
  <div className="flex animate-pulse flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm" aria-hidden="true">
    <div>
      <div className="bg-(--color-tertiary)/30 p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-5 w-20 rounded bg-black/10" />
          <div className="h-3 w-16 rounded bg-black/10" />
        </div>
        <div className="aspect-4/3 w-full rounded-xl bg-black/10" />
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-2/3 rounded bg-black/10" />
          <div className="h-4 w-12 rounded bg-primary-var/15" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="h-5 w-24 rounded-full bg-emerald-100" />
          <div className="h-3 w-20 rounded bg-black/10" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 divide-x divide-black/5 border-t border-black/5 bg-gray-50/50 py-3">
      <div className="mx-auto h-3 w-10 rounded bg-black/10" />
      <div className="mx-auto h-3 w-12 rounded bg-black/10" />
    </div>
  </div>
)

const ProductGrid = () => {
  const { products, isLoading, removeProduct } = useAllProducts()

  return (
    <div className="mb-12 my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {
        isLoading
          ? Array.from({ length: 8 }, (_, index) => <ProductCardSkeleton key={index} />)
          : products?.length
            ? products.map((product) => <ProductCard key={product._id} product={product} onDeleted={removeProduct} />)
            : (
              <div className="col-span-full flex flex-col items-center justify-center border-y border-black/10 py-16 text-center" role="status">
                <PackageOpen className="mb-3 size-8 text-neutral-muted" strokeWidth={1.5} />
                <p className="font-headline text-xl font-semibold text-neutral-var">No products yet</p>
                <p className="mt-1 text-sm text-neutral-muted">Your catalog is empty.</p>
              </div>
            )
      }
    </div>
  );
};

export default ProductGrid;