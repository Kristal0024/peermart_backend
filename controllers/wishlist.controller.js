import { wishlistModel } from "../schemas/wishlist.model.js";

export const addToWishlist=async(req,res)=>{
try {
const{productId}=req.body
const userId=req.user.id
    const response=await wishlistModel.create({
userId:userId,
productId:productId
})
res.status(201).json({
message:"product added to wishlist",
wishlist:response
})
} catch (error) {
    console.log(error)
res.status(400).json({
message:"couldnot add to wishlist"
})
}
}

export const getWishlist=async(req,res)=>{
try {
const userId=req.user.id
    const response=await wishlistModel.find({
userId:userId
})
res.status(201).json({
message:"wishlist fetched successfully",
wishlist:response
})
} catch (error) {
    console.log(error)
res.status(400).json({
message:"couldnot fetch wishlist"
})
}
}

export const removefromwishlist=async(req,res)=>{
try {
    const{wishlistId}=req.params
const deletewishlist=await wishlistModel.findByIdAndDelete(wishlistId)
if(!deletewishlist){
return res.status(401).json({
message:"Wishlist item not found"
})
}
res.status(200).json({
message:"product Removed from Wishlist",
wishlist:deletewishlist
})
} catch (error) {
    console.log(error)
res.status(500).json({
message:"failed to remove wishlist item"
})
}
}