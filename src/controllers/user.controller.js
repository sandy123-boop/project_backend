import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import {uploadCloudinary} from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    //validation-not empty
    //check for images, check for avtar
    //upload them to cloudinary
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res

    const {fullname, email, username, password} = req.body
    console.log("email: ", email);

    if (
        [fullname, email, username, password].some((field) =>
        field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    console.log("Avatar local path:", avatarLocalPath);
    console.log("Cover image local path:", coverImageLocalPath);

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }

    console.log("Starting Cloudinary upload for avatar...");
    console.log("Calling uploadCloudinary with path:", avatarLocalPath);
    const avatar = await uploadCloudinary(avatarLocalPath);
    console.log("Avatar upload result:", avatar ? "success" : "failed");
    if (avatar) {
        console.log("Avatar URL received:", avatar.url);
    }
    
    console.log("Starting Cloudinary upload for cover image...");
    console.log("Calling uploadCloudinary with path:", coverImageLocalPath);
    const coverImage = await uploadCloudinary(coverImageLocalPath);
    console.log("Cover image upload result:", coverImage ? "success" : "failed");
    if (coverImage) {
        console.log("Cover image URL received:", coverImage?.url);
    }

    if(!avatar){
        throw new ApiError(400, "Could not upload avatar, please try again later")
    }

   const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

   const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if(!createdUser) {
       throw new ApiError(500, "User creation failed")
   }

   return res.status(201).json(
         new ApiResponse(200, createdUser, "User created successfully"

         )
        );
})

export {registerUser};