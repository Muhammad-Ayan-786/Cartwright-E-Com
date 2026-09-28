import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import Footer from '../components/Footer';
import { useProductById } from '../hooks/useProducts';
import { useNavigate, useParams } from 'react-router';

const ProductDetailPage = () => {

  const navigate = useNavigate()
  const { productId } = useParams()
  const { product, isLoading } = useProductById(productId)

  return (
    <div className="min-h-screen bg-(--color-canvas) text-(--color-neutral) font-body flex flex-col justify-between">
      <div>
        {/* Existing Navbar */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
          {/* Top Breadcrumb Header */}
          <div className="flex items-center justify-between text-xs text-(--color-neutral-muted) mb-6">
            <button
              onClick={() => navigate('/')}
              type="button"
              className="flex items-center gap-1.5 font-medium hover:text-(--color-neutral) transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Catalog</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5">
              <span>Objects</span>
              <span>/</span>
              <span className="text-(--color-neutral) font-semibold">{product?.title || 'Product'}</span>
            </div>
          </div>

          {isLoading ? (
            <div className="grid animate-pulse grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12" aria-busy="true" role="status" aria-label="Loading product details">
              <div className="aspect-4/3 rounded-3xl bg-black/10 sm:aspect-square" />
              <div className="space-y-5 py-2">
                <div className="h-4 w-28 rounded bg-black/10" />
                <div className="h-10 w-3/4 rounded bg-black/10" />
                <div className="h-7 w-32 rounded bg-black/10" />
                <div className="space-y-2 pt-3">
                  <div className="h-3 w-full rounded bg-black/10" />
                  <div className="h-3 w-5/6 rounded bg-black/10" />
                  <div className="h-3 w-2/3 rounded bg-black/10" />
                </div>
                <span className="sr-only">Loading product details</span>
              </div>
            </div>
          ) : product ? (
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <ProductGallery product={product} />
              <ProductInfo product={product} />
            </div>
          ) : (
            <p className="py-20 text-center text-sm text-(--color-neutral-muted)" role="status">
              Product not found.
            </p>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;