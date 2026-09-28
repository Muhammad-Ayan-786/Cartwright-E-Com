import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'

const ProductCatalogPage = () => {
  return (
    <div className="min-h-screen bg-(--color-canvas) text-(--color-neutral) font-body">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-8 sm:pt-8">
        <PageHeader />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default ProductCatalogPage