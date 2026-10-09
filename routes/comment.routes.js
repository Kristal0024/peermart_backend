import {createComment,getComment} from '../controllers/comment.controller.js'
import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router=express.Router()

router.post("/createcomment",authMiddleware,createComment)
router.get("/getcomment/:productId",authMiddleware,getComment)

export default router