// Simple check to see if .env file exists and can be read
const fs = require('fs');
const path = require('path');

console.log("Checking .env file...");

try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    console.log("✅ .env file exists");
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log("File content length:", envContent.length, "characters");
    
    // Check if Cloudinary variables are mentioned
    const hasCloudinary = envContent.includes('CLOUDINARY');
    console.log("Contains Cloudinary variables:", hasCloudinary);
  } else {
    console.log("❌ .env file does not exist");
    console.log("Please create .env file from .env.example");
  }
} catch (error) {
  console.log("Error reading .env file:", error.message);
}
