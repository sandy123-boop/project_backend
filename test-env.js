import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./.env" });

console.log("Environment variables check:");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "set" : "not set");
console.log("PORT:", process.env.PORT ? "set" : "not set");
console.log("CORS_ORIGIN:", process.env.CORS_ORIGIN ? "set" : "not set");
console.log("ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET ? "set" : "not set");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "set" : "not set");
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "set" : "not set");
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "set" : "not set");

// Check if Cloudinary variables are set
const cloudinaryVars = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
const missingCloudinary = cloudinaryVars.filter(varName => !process.env[varName]);

if (missingCloudinary.length > 0) {
  console.log("\n❌ Missing Cloudinary variables:", missingCloudinary);
  console.log("Please check your .env file and ensure these variables are set correctly.");
} else {
  console.log("\n✅ All Cloudinary variables are set");
}
