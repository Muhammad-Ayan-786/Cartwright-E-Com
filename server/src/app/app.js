import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRouter from '../routes/auth.routes.js'
import productRouter from '../routes/product.routes.js'
import config from '../config/config.js'


const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: config.FRONTEND_URL,
  credentials: true
}))



app.use('/api/auth', authRouter)

app.use('/api/products', productRouter)


export default app