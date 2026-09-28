import { Router } from 'express'
import {
  deleteProductParamValidator,
  productValidator,
  singleProductParamValidator,
  updateProductParamValidator,
  updateProductValidator
} from '../validators/product.validator.js'
import {
  createProductController,
  deleteProductByIdController,
  getProductByIdController,
  listAllProductsController,
  updateProductByIdController
} from '../controllers/product.controller.js'
import { authenticate, authenticateSeller } from '../middlewares/auth.middleware.js'
import multer from 'multer'


const router = Router()


// configure the multer middleware (allows to send data as multipart/form-data)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: 5,
    fileSize: 1 * 1024 * 1024 // 1MB
  }
})



/**
 * @method POST
 * @route /api/products/
 * @description creates the product and save its data into the DB, images will be store on imagekit.
 * @access seller
 * @param req.body => {
 *    title, description,
 *    price:{ amount, currency },
 *    sizes:[{ size, stock }, { size, stock }]
 * }
 */
router.post('/',
  // -------- Check if the user is authenticated --------
  authenticate,
  // -------- Check if the user is a seller --------
  authenticateSeller,
  // -------- Upload the images ----------
  upload.array('images'),
  // -------- parse the complex data like object and array into json --------
  (req, res, next) => {

    req.body?.price && (req.body.price = JSON.parse(req.body.price))
    req.body?.stock && (req.body.stock = JSON.parse(req.body.stock))

    next()
  },
  // -------- Validate the data --------
  productValidator,
  // -------- Create the product --------
  createProductController
)


/**
 * @method GET
 * @route /api/products/
 * @description Read all the products from the DB
 * @access user
 */
router.get("/",
  // -------- Check if the user is authenticated --------
  authenticate,
  // -------- List all the products --------
  listAllProductsController
)



/**
 * @method GET
 * @route /api/products/:productId
 * @description Read one product from the DB
 * @access user
 */
router.get("/:productId",
  // -------- Check if the user is authenticated --------
  authenticate,
  // -------- Validate params data --------
  singleProductParamValidator,
  // -------- Get a single product --------
  getProductByIdController
)



/**
 * @method DELETE
 * @route /api/products/:productId
 * @description Delete one product from the DB
 * @access seller
 */
router.delete("/:productId",
  // -------- Check if the user is authenticated --------
  authenticate,
  // -------- Check if the user is a seller --------
  authenticateSeller,
  // -------- Validate params data --------
  deleteProductParamValidator,
  // -------- Delete the product --------
  deleteProductByIdController
)



/**
 * @method PATCH
 * @route /api/products/:productId
 * @description Update one product from the DB
 * @access seller
 */
router.patch("/:productId",
  // -------- Check if the user is authenticated --------
  authenticate,
  // -------- Check if the user is a seller --------
  authenticateSeller,
  // -------- Validate params data --------
  updateProductParamValidator,
  // -------- Validate the form data --------
  updateProductValidator,
  // -------- Update the product --------
  updateProductByIdController
)




export default router