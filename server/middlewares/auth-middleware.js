import jwt from "jsonwebtoken";
import { userModel } from "../models/User-Model.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Invalid authorization try" });
  }
  const jwttoken = token.replace("Bearer", "").trim();
  console.log(jwttoken);
  try {
    const isVerified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);
    const userData = await userModel
      .findOne({ _id: isVerified._id })
      .select({ password: 0 });
    console.log(userData);
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authorization catch" });
  }
};
