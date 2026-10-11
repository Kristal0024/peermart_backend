import {commentModel} from '../schemas/comment.model.js'

export const createComment=async(req,res)=>{
try {
const{message,productId,parentComment}=req.body
    const response=await commentModel.create({
productId,
userId:req.user.id,
message,
parentComment:parentComment||null
})
res.status(200).json({
message:"comment posted successfully",
comment:response
})
} catch (error) {
    console.log(error)
res.status(400).json({
message:"couldnot post comment"
})
}
}
export const getComment=async(req,res)=>{
try {
const {productId}=req.params
    const allComments=await commentModel.find({productId}).populate("userId","name avatar").sort({createdAt:-1}).lean()

//create reply array for every comment
const commentMap=new Map()

allComments.forEach((comment)=>{
comment.replies=[]
commentMap.set(comment._id.toString(),comment)
})
// 3. Attach each comment to its parent
    const comments = [];

    allComments.forEach((comment) => {
      if (comment.parentComment) {
        const parent = commentMap.get(
          comment.parentComment.toString()
        );

        if (parent) {
          parent.replies.push(comment);
        } else {
          comments.push(comment);
        }
      } else {
        comments.push(comment);
      }
    });

    // 4. Return the nested comments
    res.status(200).json({
      message: "Comments fetched successfully",
      comments,
    });
} catch (error) {
    console.log(error)
res.status(400).json({
message:"failed to fetch comments"
})
}
}