import { useEffect, useState } from "react"
import { deleteProductByIdApi, getAllProductsApi, getProductByIdApi } from "../apis/productApis"

/**
 * @description get all products
 * @returns products
 * @throws error
 */
export const useAllProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      setIsLoading(true)

      const res = await getAllProductsApi()
      setProducts(res.data.products)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  const removeProduct = (productId) => {
    setProducts((currentProducts) => currentProducts.filter((product) => product._id !== productId))
  }

  return { products, isLoading, removeProduct }
}



/**
 * @description get product by id
 * @param {string} productId
 * @returns product
 * @throws error
 */
export const useProductById = (productId) => {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isCurrentRequest = true

    const fetchProduct = async () => {
      setIsLoading(true)
      setProduct(null)

      try {
        const res = await getProductByIdApi(productId)
        if (isCurrentRequest) setProduct(res.data.product)
      } catch (error) {
        if (isCurrentRequest) console.log(error)
      } finally {
        if (isCurrentRequest) setIsLoading(false)
      }
    }

    fetchProduct()
    return () => { isCurrentRequest = false }
  }, [productId])

  return { product, isLoading }
}



/**
 * @description get a product property
 * @param {object} product
 * @returns product property
 * @throws error
 */
export const useProductProperty = (product) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const {
    _id,
    title = 'Untitled Product',
    description = '',
    images = [],
    price = { amount: 0, currency: 'ZAR' },
    stock = 0,
    seller = 'Unknown Seller'
  } = product || {};

  // Format price according to currency provided (e.g. ZAR -> R 150.00)
  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: price.currency || 'ZAR',
    maximumFractionDigits: 0
  }).format(price.amount || 0);


  // Short ID display for SKU tag
  const shortSku = _id ? `CRT-${_id.slice(-6).toUpperCase()}` : 'CRT-NONE';

  const isLowStock = stock <= 10;

  const primaryImage = images[0]?.url ||
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600';


  return {
    _id,
    title,
    description,
    images,
    price,
    stock,
    seller,
    formattedPrice,
    shortSku,
    isLowStock,
    primaryImage,
    quantity,
    setQuantity,
    isInCart,
    setIsInCart
  }
}



/**
 * @description product actions handler (edit, delete)
 * @param {string} productId
 * @returns product actions
 * @throws error
 */
export const useProductActions = () => {

  const [isDeleting, setIsDeleting] = useState(false)

  const deleteHandler = async (productId, onDeleted) => {
    try {
      setIsDeleting(true)
      await deleteProductByIdApi(productId)
      onDeleted?.(productId)

    } catch (error) {
      console.log(error)
    } finally {
      setIsDeleting(false)
    }
  }


  return { isDeleting, deleteHandler }
}