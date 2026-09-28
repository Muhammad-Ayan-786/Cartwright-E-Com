import jwt from 'jsonwebtoken'
import config from '../config/config.js'


/**
 * @param {Object} { userId } 
 */
export const generateTokens = ({ userId, role }) => {
  const accessToken = jwt.sign(
    { userId, role },
    config.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  )

  const refreshToken = jwt.sign(
    { userId, role },
    config.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  )

  return { accessToken, refreshToken }
}


/**
 * @param {string} token 
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.REFRESH_TOKEN_SECRET)
}


/**
 * @param {string} token 
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.ACCESS_TOKEN_SECRET)
}