import "dotenv/config";
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

console.log("🔧 cloudinary.js module loaded - testing console output");
console.log("Cloudinary config details:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "*** (set)" : "not set"
});

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadCloudinary = async (localFilePath) => {
        console.log("📤 uploadCloudinary called with file:", localFilePath);
        
        try {
            if (!localFilePath) {
                console.log("❌ No file path provided");
                return null;
            }
            
            console.log("🔄 Starting Cloudinary upload...");
            //upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            });
               
            //file has been uploaded successfully
            //console.log("✅ File uploaded on cloudinary: " + response.url);
            //console.log("📊 Upload details:", {
              //  public_id: response.public_id,
                //format: response.format,
                //bytes: response.bytes
            //});
            fs.unlinkSync(localFilePath);
            return response; 
        } catch (error) {
            console.error("❌ Cloudinary upload error:", error.message);
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath); // removes the locally saved
                console.log("🗑️ Removed local file:", localFilePath);
            }
            //temporary file as the upload operation got failed
            return null;
        }
    }

    export { uploadCloudinary };
