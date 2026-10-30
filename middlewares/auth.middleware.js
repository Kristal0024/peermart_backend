import jwt from "jsonwebtoken";
     
export const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.token
if(!token){
return res.status(401).json({
message:"Authentication required. please log in."
})
}

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
  console.log("JWT error:", error.message);

  return res.status(401).json({
    message: "Invalid or expired token",
  });
}
};
