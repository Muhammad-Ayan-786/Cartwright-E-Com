import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useProductById } from '../hooks/useProducts'
import ProductFormPage from './ProductFormPage'

const ProductEditPage = () => {
  const { productId } = useParams()
  const { product, isLoading } = useProductById(productId)

  if (!isLoading && product) {
    return <ProductFormPage initialData={product} isEditMode />
  }

  return (
    <div className="flex min-h-screen flex-col justify-between bg-(--color-canvas) font-body text-(--color-neutral)">
      <div>
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6">
          {isLoading ? (
            <p className="py-20 text-sm text-(--color-neutral-muted)" role="status">Loading product...</p>
          ) : (
            <div className="py-20">
              <p className="text-sm text-(--color-neutral-muted)" role="alert">Product could not be found.</p>
              <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--color-secondary) hover:underline">
                <ArrowLeft size={16} /> Back to catalog
              </Link>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ProductEditPage
