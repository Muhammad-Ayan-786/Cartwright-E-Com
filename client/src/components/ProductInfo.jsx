import { ShoppingBag, Minus, Plus } from 'lucide-react';
import { useProductProperty } from '../hooks/useProducts';

const ProductInfo = ({ product }) => {

  const {
    title,
    description,
    stock,
    price,
    seller,
    quantity,
    isInCart,
    setQuantity,
    setIsInCart,
    shortSku,
    formattedPrice
  } = useProductProperty(product)

  return (
    <div className="w-full flex flex-col justify-between">
      <div>
        {/* Category & Stock Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-(--color-secondary)/10 text-(--color-secondary) border border-(--color-secondary)/20">
            APPAREL
          </span>
          <span className="text-xs font-mono text-(--color-neutral-muted)">
            SKU: {shortSku}
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>In Stock ({stock} units)</span>
          </span>
        </div>

        {/* Product Title */}
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-normal text-(--color-neutral) leading-tight mb-3">
          {title}
        </h1>

        {/* Price Display */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="font-headline text-2xl sm:text-3xl font-semibold text-(--color-primary)">
            {formattedPrice}
          </span>
          <span className="text-xs text-(--color-neutral-muted) uppercase font-mono">
            {price.currency}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-(--color-neutral)/70 leading-relaxed mb-8">
          {description}
        </p>

        {/* Functional Specifications Table */}
        <div className="bg-(--color-tertiary)/30 p-4 sm:p-5 rounded-2xl border border-black/5 mb-8">
          <div className="text-[10px] font-bold tracking-widest uppercase text-(--color-neutral-muted) mb-3">
            Functional Specifications
          </div>
          <div className="grid grid-cols-2 gap-y-2.5 text-xs">
            <span className="text-(--color-neutral-muted)">Material</span>
            <span className="font-medium text-(--color-neutral) text-right">Premium Tailored Cotton Blend</span>

            <span className="text-(--color-neutral-muted)">Seller ID</span>
            <span className="font-mono font-medium text-(--color-neutral) text-right truncate pl-2">
              {seller}
            </span>

            <span className="text-(--color-neutral-muted)">Fit</span>
            <span className="font-medium text-(--color-neutral) text-right">Casual Tapered Fit</span>

            <span className="text-(--color-neutral-muted)">Origin</span>
            <span className="font-medium text-(--color-neutral) text-right">Cartwright Atelier</span>
          </div>
        </div>

        {/* Quantity Controls & Add To Cart Button */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
          <div className="flex items-center justify-between bg-white border border-black/10 rounded-xl px-3 py-2 sm:w-32 shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
              className="p-1 hover:bg-black/5 rounded-lg transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold text-sm px-2">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(prev => Math.min(stock, prev + 1))}
              disabled={quantity >= stock}
              className="p-1 hover:bg-black/5 rounded-lg transition-colors disabled:opacity-30 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {isInCart ? (
            <button
              type="button"
              disabled
              className="flex-1 cursor-default items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm disabled:opacity-90 sm:flex"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Added in cart</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsInCart(true)}
              className="flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-(--color-primary) px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-(--color-primary-hover) sm:flex"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add to Cart • {formattedPrice}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;