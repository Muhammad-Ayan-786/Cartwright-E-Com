import UserModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateTokens, verifyRefreshToken } from "../utils/auth.utils.js"


/**
 * @description Register an user and save the data from req.body
 * @param req express.Request
 * @param req.body Object
 * @param req.body.email String
 * @param req.body.name String
 * @param req.body.password String
 */
export const registerController = async (req, res) => {
  const { name, email, password } = req.body

  const isUserAlreadyExist = await UserModel.findOne({ email })

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User already exists with this email address",
      error: [
        {
          field: "email",
          message: "User already exists with this email address"
        }
      ]
    })
  }

  const user = await UserModel.create({
    name,
    email,
    hashPassword: await bcrypt.hash(password, 12),
  })


  const {
    accessToken,
    refreshToken
  } = generateTokens({ userId: user._id, role: user.role })

  res.cookie("refreshToken", refreshToken, { httpOnly: true })

  await UserModel.findByIdAndUpdate(user._id, { refreshToken })

  return res.status(201).json({
    message: "User Registered Successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      accessToken
    }
  })

}



/**
 * @description Login a user and create new set of accessToken and refreshToken 
 * @param req express.Request
 * @param req.body Object
 * @param req.body.email String
 * @param req.body.password String
 */
export const loginController = async (req, res) => {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashPassword)

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password"
    })
  }

  const {
    accessToken,
    refreshToken
  } = generateTokens({ userId: user._id, role: user.role })

  res.cookie("refreshToken", refreshToken, { httpOnly: true })

  await UserModel.findByIdAndUpdate(user._id, { refreshToken })

  res.status(200).json({
    message: "User loggedIn successfully",
    data: {
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      },
      accessToken
    }
  })

}



/**
 * @description Verify the refresh token and generate a new set of accessToken and refreshToken
 * @param req express.Request
 * @param res express.Response
 */
export const refreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token is required."
    })
  }


  try {

    const { userId, role } = verifyRefreshToken(refreshToken)

    const user = await UserModel.findById(userId)

    if (refreshToken !== user.refreshToken) {
      await UserModel.findByIdAndUpdate(userId, {
        refreshToken: null
      })

      res.clearCookie("refreshToken", { httpOnly: true })

      return res.status(401).json({
        message: "Refresh token mismatch"
      })
    }

    const {
      accessToken,
      refreshToken: newRefreshToken
    } = generateTokens({ userId, role })

    res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

    await UserModel.findByIdAndUpdate(user._id, { refreshToken: newRefreshToken })

    return res.status(200).json({
      message: "Tokens refresh successfully.",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken
      }
    })

  } catch (error) {
    return res.status(401).json({
      message: "Invalid refresh Token"
    })
  }

}



/**
 * @description Get the authenticated user's profile data
 * @param req express.Request
 * @param res express.Response
 */
export const getMeController = async (req, res) => {
  const { userId } = req.user

  const user = await UserModel.findById(userId)

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  return res.status(200).json({
    message: "User data fetch successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    }
  })
}



/**
 * @description Log out the authenticated user — clear refresh token in DB and cookie
 * @param req express.Request
 * @param res express.Response
 */
export const logoutController = async (req, res) => {
  const { userId } = req.user

  await UserModel.findByIdAndUpdate(userId, { refreshToken: null })

  res.clearCookie("refreshToken", { httpOnly: true })

  return res.status(200).json({
    message: "Logged out successfully"
  })
}