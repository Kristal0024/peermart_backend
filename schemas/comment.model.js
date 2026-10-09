import mongoose, {model,Schema} from 'mongoose'

const commentschema=new Schema({
productId:{
type:mongoose.Schema.Types.ObjectId,
ref:"product",
required:true
},
userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
},
message:{
type:String,
required:true,
maxlength:1000,
trim:true
},
parentComment:{
type:mongoose.Schema.Types.ObjectId,
ref:"comment",
default:null
}
},{
timestamps:true
})

export const commentModel=new model("comment",commentschema)