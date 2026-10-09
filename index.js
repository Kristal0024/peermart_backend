import express from 'express'
import {connectdb} from './configs/db.js'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import profileRoutes from './routes/profile.routes.js'
import wishlist from './routes/wishlist.routes.js'
import comment from './routes/comment.routes.js'


import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()


const app=express()
app.use(cors())
app.use(express.json())
connectdb()

app.use("/api/auth",authRoutes)
app.use("/products",productRoutes)

app.use("/api/profile",profileRoutes)
app.use("/api/wishlist",wishlist)
app.use("/api/comment",comment)

app.listen(8000,(req,res)=>{
console.log("the server is running on port 8000")
})

app.get("/",(req,res)=>{
res.send("hello world")
})