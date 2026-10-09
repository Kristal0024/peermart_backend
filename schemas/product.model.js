import {model,Schema} from 'mongoose'

const productSchema=new Schema({
title:{
type:String,
required:true
},
category:{
type:String,
required:true
},
subcategory:{
type:String,
required:true
},
condition:{
type:String,
required:true
},
price:{
type:Number,
required:true
},
location:{
type:String,
required:true
},
description:{
type:String,
required:true
},
seller:{
type:Schema.Types.ObjectId,
ref:"user",
required:true
},
images:{
type:[String],
required:true
},
},{timestamps:true})

export const productModel=new model("product",productSchema)