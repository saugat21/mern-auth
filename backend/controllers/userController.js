import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import genetateToken from "../utils/genetateToken.js";

//access= public  route= POST /api/users/auth   == Login
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth users' })
});

//access= public  route= POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const saltRound = 10;
    const { name, email, password } = req.body;

    //checking existed users
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('user already exists')
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const user = await User.create({
        name, email, password: hashedPassword
    });

    if (user) {
        //generating token
        genetateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

});

//access= public  route= POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout users' })
});

//access= private  route= GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' })
});

//access= private  route= PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Updat User Profile' })
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };