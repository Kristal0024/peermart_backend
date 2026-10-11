import express from 'express'
import { createProduct,getMyListingStats,getproductbyId,getProducts } from '../controllers/product.controller.js'
import { upload } from '../middlewares/product.middleware.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'
import {addBulkProducts} from '../addProducts.js'

const router=express.Router()

router.post("/",authMiddleware,upload.array("image",6),createProduct)
router.post("/bulk",authMiddleware,addBulkProducts)
router.get("/getproducts",getProducts)
router.get("/product/:id",getproductbyId)
router.get("/getmylisting",authMiddleware,getMyListingStats)

export default router

