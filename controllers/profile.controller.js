import { userModel } from "../schemas/user.model.js";

export const getProfile=async(req,res)=>{
try {
const user=await userModel.findById(req.user.id).select("-password")

if(!user){
return res.status(404).json({
message:"user not found"
})
}

res.status(200).json({
user
})
    
} catch (error) {
    console.log(error)
res.status(500).json({
message:"Failed to get Profile"
})
}
}