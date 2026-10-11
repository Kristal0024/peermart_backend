import cloudinary from "../configs/cloudinary.js";
import { productModel } from "../schemas/product.model.js";
import {Readable} from 'stream'


//create product listing
export const createProduct=async(req,res)=>{
try{

const {title,category,subcategory,condition,price,location,description}=req.body
const imageUrls=[]

for(const file of req.files){
const result=await new Promise((resolve,reject)=>{
const uploadStream=cloudinary.uploader.upload_stream({
folder:"peermart/products"
},
(error,result)=>{
if(error){
reject(error)
}else{
resolve(result)
}
}
)
Readable.from(file.buffer).pipe(uploadStream)
})
imageUrls.push(result.secure_url)
}

const product=await productModel.create({
title,
category,
subcategory,
condition,
price:Number(price),
location,
description,
images:imageUrls,
seller:req.user.id
})
res.status(201).json({
message:"product created successfully",
product
})
}catch(error){
console.log(error)
res.status(500).json({
message:"failed to create object",
error:error.message
})
}
}

//Get all products
export const getProducts=async(req,res)=>{
try {
    const response=await productModel.find().populate("seller","name email avatar")
res.status(200).json({
message:"Product fetched successfully",
products:response
})
} catch (error) {
    console.log(error)
res.status(400).json({
message:"couldnot fetch products"
})
}
}

//Get product by Id
export const getproductbyId=async(req,res)=>{
try {
    const {id}=req.params
const product=await productModel.findById(id).populate("seller","name")
res.status(200).json({
message:"fetched product successfully",
product:product
})
} catch (error) {
    console.log(error)
res.status(401).json({
message:"couldnot fetch product"
})
}
}

//Get user total listing status
export const getMyListingStats=async(req,res)=>{
try {
    const products=await productModel.find({
seller:req.user.id
})
const available=products.filter((product)=>
product.status==="Available"
).length
const sold=products.filter((product)=>
product.status=="Sold"
).length
const booked=products.filter((product)=>
product.status==="Booked"
).length
const activeListing=available+booked
res.status(201).json({
activeListing,
sold
})
} catch (error) {
    res.status(400).json({
message:"couldnot fetch listing stats"
})
}
}