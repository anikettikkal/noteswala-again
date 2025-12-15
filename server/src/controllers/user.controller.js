import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

//----------------- Signup Controller -------------------

export const registerUser = asyncHandler(async (req, res) => {
    const { email, name, password, phone, role } = req.body;
    // 1. Check if all fields are provided
    if (!email || !password || !name || !phone || !role) {
        throw new ApiError(400, "All Fields Are Required")
    }

    // 2. check if email is all ready exists
    const emailExist = await User.findOne({ email })
    if (emailExist) {
        throw new ApiError(400, "Email is all ready exist");

    }

    // 3. check if phone is all ready exist
    const existPhone = await User.findOne({ phone })
    if (existPhone) {
        throw new ApiError(402, "Phone is All ready Exist");

    }

    // 4. create user
    const user = await User.create({ email, name, phone, password, role })

    if (!user) {
        throw new ApiError(500, "Something went wrong while creating user")
    }

    // 5. Response

    return res.json(
        new ApiResponse(201, "user created successfully", user)
    )


})

//------------------------Login Controller----------

export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // 1. check missing fields
    if (!email || !password) {
        throw new ApiError(400, "email and password are required")
    }

    //2. check user is exists
    const user = await User.findOne({ email, password });
    if (!user) {
        throw new ApiError(400, "invalid email and password");

    }

    // 3. success response
    return res.status(200).json({
        success: true,
        message: "User Login Successfully",
        data: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role
        }
    })
})