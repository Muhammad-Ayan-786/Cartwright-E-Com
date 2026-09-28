import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './routes/AppRoutes'
import { AuthStoreContextProvider } from './context/authContext'

createRoot(document.getElementById('root')).render(
  <AuthStoreContextProvider>
    <AppRouter />
  </AuthStoreContextProvider>
)
