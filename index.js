import express from 'express'
import { connectdb } from './configs/db.js'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import profileRoutes from './routes/profile.routes.js'
import wishlist from './routes/wishlist.routes.js'
import comment from './routes/comment.routes.js'

import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(cors({
origin:"http://localhost:5173",
credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/products", productRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/wishlist", wishlist)
app.use("/api/comment", comment)

app.get("/", (req, res) => {
  res.send("hello world")
})

const startServer = async () => {
  try {
    await connectdb()

    app.listen(8000, () => {
      console.log("The server is running on port 8000")
    })
  } catch (error) {
    console.error("Failed to connect to database:", error)
    process.exit(1)
  }
}

startServer()