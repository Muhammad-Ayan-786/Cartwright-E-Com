import { Pencil, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useProductActions, useProductProperty } from '../hooks/useProducts';

const ProductCard = ({ product, onDeleted }) => {
  const navigate = useNavigate()

  const {
    _id,
    title,
    description,
    images,
    stock,
    isLowStock,
    primaryImage,
    shortSku,
    formattedPrice
  } = useProductProperty(product)


  const { isDeleting, deleteHandler } = useProductActions()

  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <Link to={`/products/${_id}`} className="block text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-secondary)">
        {/* Top Header & Image Preview Container */}
        <div className="p-3 bg-(--color-tertiary)/30 relative">
          <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-(--color-neutral-muted) mb-2">
            <span className="bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded border border-black/5 font-mono">
              {shortSku}
            </span>
            {images.length > 1 && (
              <span className="text-[10px] text-(--color-neutral-muted)">
                +{images.length - 1} photos
              </span>
            )}
          </div>

          {/* Product Cover Image */}
          <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-black/5 relative">
            <img
              src={primaryImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-headline text-base font-semibold text-(--color-neutral) line-clamp-1">
              {title}
            </h3>
            <span className="font-semibold text-sm text-(--color-primary) shrink-0">
              {formattedPrice}
            </span>
          </div>

          {/* Description Snippet */}
          {description && (
            <p className="text-xs text-(--color-neutral-muted) line-clamp-1 mb-3">
              {description}
            </p>
          )}

          {/* Stock Tag */}
          <div className="flex items-center justify-between text-xs pt-1">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${isLowStock
              ? 'bg-red-50 text-red-600 border border-red-200'
              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isLowStock ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
              <span>{isLowStock ? `Low Stock: ${stock}` : `In Stock: ${stock}`}</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 border-t border-black/5 divide-x divide-black/5 bg-gray-50/50 text-xs mt-2">
        <button
          onClick={() => navigate(`/products/${_id}/edit`)}
          className="py-2.5 flex items-center justify-center gap-1.5 font-medium text-(--color-neutral)/70 hover:text-(--color-neutral) hover:bg-white transition-colors cursor-pointer"
        >
          <Pencil className="w-3.5 h-3.5" />
          <span>Edit</span>
        </button>

        <button
          onClick={() => deleteHandler(_id, onDeleted)}
          disabled={isDeleting}
          className="flex cursor-pointer items-center justify-center gap-1.5 py-2.5 font-medium text-(--color-neutral)/70 transition-colors hover:bg-white hover:text-red-600 disabled:pointer-events-none disabled:opacity-50"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{isDeleting ? 'Deleting…' : 'Delete'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;