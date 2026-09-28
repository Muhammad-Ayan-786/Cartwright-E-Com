import ProductModel from "../models/product.model.js";
import { deleteFile, uploadFile } from "../services/storage.service.js";


/**
 * @description Create a product
 * @param req express.Request
 * @param res express.Response
 * @returns Created product
 */
export const createProductController = async (req, res) => {
  const { title, description, price, stock } = req.body

  const uploadPromises = req.files.map(file => (
    uploadFile({
      buffer: file.buffer,
      fileName: file.originalname
    })
  ))

  const uploadResponses = await Promise.all(uploadPromises)

  const images = uploadResponses.map(({ fileId, url }) => ({ fileId, url }))

  const product = await ProductModel.create({
    title,
    description,
    images,
    price,
    stock,
    seller: req.user.userId
  })

  res.status(201).json({
    message: "Product created successfully",
    data: {
      product
    }
  })
}



/**
 * @description List all products
 * @param req express.Request
 * @param res express.Response
 * @returns List of all products
 */
export const listAllProductsController = async (req, res) => {
  const products = await ProductModel.find()

  res.status(200).json({
    message: "Products data fetched successfully",
    data: {
      products
    }
  })
}



/**
 * @description Get a product by id
 * @param req express.Request
 * @param res express.Response
 * @returns Single product data
 */
export const getProductByIdController = async (req, res) => {
  const { productId } = req.params

  const product = await ProductModel.findById(productId)

  if (!product) {
    return res.status(404).json({ message: "Product not found." })
  }

  res.status(200).json({
    message: "Product data fetched successfully",
    data: {
      product
    }
  })
}



/**
 * @description Delete a product by id
 * @param req express.Request
 * @param res express.Response
 * @returns Deleted product data
 */
export const deleteProductByIdController = async (req, res) => {
  const { productId } = req.params

  const product = await ProductModel.findById(productId)

  if (!product) {
    return res.status(404).json({ message: "Product not found." })
  }

  await Promise.all(product.images.map((image) => deleteFile(image.fileId)))

  await ProductModel.findByIdAndDelete(productId)

  res.status(200).json({
    message: "Product deleted successfully",
    data: {
      product
    }
  })
}



/**
 * @description Update a product by id
 * @param req express.Request
 * @param res express.Response
 * @returns Updated product data
 */
export const updateProductByIdController = async (req, res) => {
  const { productId } = req.params
  const { title, description, price, stock } = req.body

  const product = await ProductModel.findByIdAndUpdate(
    productId,
    { $set: { title, description, price, stock } },
    { returnDocument: 'after', runValidators: true }
  )

  if (!product) {
    return res.status(404).json({
      message: "Product not found."
    })
  }

  res.status(200).json({
    message: "Product updated successfully",
    data: {
      product
    }
  })
}