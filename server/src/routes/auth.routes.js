import { Router } from "express"
import { loginValidator, registerValidator } from "../validators/auth.validator.js"
import {
  getMeController,
  loginController,
  logoutController,
  refreshController,
  registerController
} from "../controllers/auth.controller.js"
import { authenticate } from "../middlewares/auth.middleware.js"


const router = Router()

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */
router.post("/register", registerValidator, registerController)



/**
 * @POST /api/auth/login
 * @param req Express req
 * @param req.body = { email,password }
 * @response res.status = 200 (if successful)
 */
router.post("/login", loginValidator, loginController)



/**
 * @POST /api/auth/refresh
 * @param req Express req
 * @param req.cookie = cookie
 * @response res.status = 200 (if successful)
 */
router.post('/refresh', refreshController)



/**
 * @GET /api/auth/me
 * @param req Express req
 * @param req.headers = { authorization }
 * @response res.status = 200 (if successful)
 */
router.get("/me", authenticate, getMeController)



/**
 * @POST /api/auth/logout
 * @param req Express req
 * @param req.cookie = cookie
 * @response res.status = 200 (if successful)
 */
router.post('/logout', authenticate, logoutController)


export default router