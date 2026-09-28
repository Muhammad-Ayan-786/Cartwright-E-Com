import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const ProductGallery = ({ product }) => {
  const images = product?.images || [];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const mainImage = images[selectedImageIndex]?.url

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 1. Main Large Image */}
      <div className="relative aspect-4/3 sm:aspect-square w-full bg-(--color-tertiary)/30 rounded-3xl overflow-hidden border border-black/5">
        {/* Top Batch Tag */}
        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-(--color-neutral) border border-black/5 shadow-xs">
          BATCH N° 04
        </div>

        {/* Bottom Masterpiece Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-(--color-neutral) border border-black/5 shadow-xs flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-(--color-primary)" />
          <span>Studio Masterpiece</span>
        </div>

        {/* Main Photo */}
        <img
          src={mainImage}
          alt={product?.title || 'Product Image'}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Small Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, idx) => {
            const isSelected = selectedImageIndex === idx;

            return (
              <button
                key={img.fileId || img}
                type="button"
                onClick={() => setSelectedImageIndex(idx)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-black/5 ${isSelected
                  ? 'border-(--color-primary) ring-2 ring-(--color-primary)/20 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={typeof img === 'string' ? img : img.url}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;