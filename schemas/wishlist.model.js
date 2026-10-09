import { model,Schema } from "mongoose";

const wishlistschema=new Schema({
userId:{
type:Schema.Types.ObjectId,
ref:"user",
required:true
},
productId:{
type:Schema.Types.ObjectId,
ref:"product",
required:true
}
})

wishlistschema.index(
{userId:1,productId:1},
{unique:true}
)

export const wishlistModel=new model("wishlist",wishlistschema)