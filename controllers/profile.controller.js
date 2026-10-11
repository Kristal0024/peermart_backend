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

export const updateLocation = async (req, res) => {
  try {
    const { location } = req.body;

    if (!location || !location.trim()) {
      return res.status(400).json({
        message: "Location is required",
      });
    }

    const user = await userModel.findByIdAndUpdate(
      req.user.id,
      { location: location.trim() },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Location updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to update location",
    });
  }
};
