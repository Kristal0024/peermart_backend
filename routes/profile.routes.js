import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getProfile,updateLocation } from '../controllers/profile.controller.js'

const router=express.Router()

router.get("/",authMiddleware,getProfile)
router.patch("/location",authMiddleware,updateLocation)
export default router