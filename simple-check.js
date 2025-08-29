const fs = require('fs');
const path = require('path');

console.log("=== Environment Check ===");

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log("✅ .env file exists");
  
  // Read and show basic info about .env file
  const content = fs.readFileSync(envPath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  console.log("Number of environment variables:", lines.length);
  
  // Check for Cloudinary variables
  const cloudinaryVars = lines.filter(line => line.includes('CLOUDINARY'));
  console.log("Cloudinary variables found:", cloudinaryVars.length);
  
  if (cloudinaryVars.length > 0) {
    cloudinaryVars.forEach(line => {
      const [key] = line.split('=');
      console.log("  -", key.trim());
    });
  } else {
    console.log("❌ No Cloudinary variables found in .env file");
  }
} else {
  console.log("❌ .env file does not exist");
  console.log("Please run: cp .env.example .env");
  console.log("Then edit .env with your actual credentials");
}

console.log("\n=== Current Process Environment ===");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "set" : "not set");
console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME ? "set" : "not set");
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "set" : "not set");
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "set" : "not set");
