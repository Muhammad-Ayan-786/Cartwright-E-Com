import { RouterProvider, createBrowserRouter } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegisrterPage from '../pages/RegisrterPage'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectRotues'
import ProductCatalogPage from '../pages/ProductCatalogPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductFormPage from '../pages/ProductFormPage'
import ProductEditPage from '../pages/ProductEditPage'

const AppRouter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoutes />,
      children: [
        {
          index: true,
          element: <LoginPage />
        },
        {
          path: 'register',
          element: <RegisrterPage />
        }
      ]
    },
    {
      path: '/products',
      element: <ProtectedRoutes />,
      children: [
        {
          index: true,
          element: <ProductCatalogPage />
        },
        {
          path: ':productId',
          element: <ProductDetailPage />
        },
        {
          path: 'new',
          element: <ProductFormPage />
        },
        {
          path: ':productId/edit',
          element: <ProductEditPage />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter