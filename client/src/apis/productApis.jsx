import { api } from "../config/api"

/**
 * @description create product
 * @param {Object} product
 * @returns product
 * @throws error
 */
export const createProductApi = async (formData) => {
  try {

    const res = await api.post("/products", formData)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to create product. Please try again."
    }

  }
}


/**
 * @description get all products
 * @param {string} token
 * @returns products
 * @throws error
 */
export const getAllProductsApi = async () => {
  try {

    const res = await api.get("/products")
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to get products. Please try again."
    }

  }
}


/**
 * @description get product by id
 * @param {string} productId
 * @returns product
 * @throws error
 */
export const getProductByIdApi = async (productId) => {
  try {

    const res = await api.get(`/products/${encodeURIComponent(productId)}`)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to get product. Please try again."
    }

  }
}


/**
 * @description delete product by id
 * @param {string} productId
 * @returns product
 * @throws error
 */
export const deleteProductByIdApi = async (productId) => {
  try {

    const res = await api.delete(`/products/${productId}`)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to delete product. Please try again."
    }

  }
}


/**
 * @description update product by id
 * @param {string} productId
 * @param {Object} product
 * @returns product
 * @throws error
 */
export const updateProductApi = async (productId, productData) => {
  try {

    const res = await api.patch(`/products/${productId}`, productData)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to update product. Please try again."
    }

  }
}