import { verifyAccessToken } from "../utils/auth.utils.js"

export const authenticate = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1]

  if (!accessToken) {
    return res.status(401).json({
      message: "Access token not found"
    })
  }

  try {
    const decoded = verifyAccessToken(accessToken)

    req.user = decoded

    next()

  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, invalid access token"
    })
  }
}


export const authenticateSeller = (req, res, next) => {
  if (req.user.role !== 'seller') {
    return res.status(403).json({
      message: 'You are not authorized to create a product'
    })
  }

  next()
}