
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: " User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();

    res.status(200).json({ message: " User Created successfully", user : {
      _id : createdUser._id,
      fullname : createdUser.fullname,
      email : createdUser.email
    } });
  } catch (error) {
    console.log("Error : ", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};



export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const sendUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
    };

    res.status(200).json({
      message: "Login Successful!",
      user: sendUser,
      userToken : token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
};



export const logout = async (req, res) => {
  try {
    res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logout successful" });


    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout Error:", error.message);
    res.status(500).json({
      message: "Logout failed",
    });
  }
};
 

