import { addToWishlist,getWishlist,removefromwishlist } from "../controllers/wishlist.controller.js";


import express from 'express'
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router=express.Router()

router.post("/addtowishlist",authMiddleware,addToWishlist)
router.get("/getwishlist",authMiddleware,getWishlist)
router.delete("/removefromwishlist/:wishlistId",authMiddleware,removefromwishlist)

export default router