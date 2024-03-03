import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import genetateToken from "../utils/genetateToken.js";

//access= public  route= POST /api/users/auth   == Login
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        //comparing password with hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401);
            throw new Error('Invalid email or password');
        }

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
    // res.clearCookie('jwt')
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: 'Logout users' })
});

//access= private  route= GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }
    res.status(200).json(user)
});

//access= private  route= PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    } else {
        res.status(404);
        throw new Error('User not Found!')
    }
    res.status(200).json({ message: 'Updat User Profile' })
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };