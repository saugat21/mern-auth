import asyncHandler from "express-async-handler"


//access= public  route= POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth users' })
});

//access= public  route= POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register users' })
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