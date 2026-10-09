import express from 'express'
import { login, signup } from "../controllers/auth.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.get("/protected",authMiddleware,(req,res)=>{
res.json({
message:"You can access this protected route",
user:req.user
})
})

export default router