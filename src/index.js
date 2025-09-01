import dotenv from "dotenv";
import { app } from "./app.js";          // Import the configured app
import connectDB from "./db/index.js";
import { validateEnvVars } from "./utils/envValidation.js";
import './utils/cloudinary.js';


dotenv.config({ path: "./.env" });

// Validate environment variables before starting the server
validateEnvVars();

connectDB()
  .then((connection) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port: ${process.env.PORT || 8000}`);
      if (!connection) {
        console.log("⚠️  Running without database connection");
      }
    });
  })
  .catch((err) => {
    console.log("❌ Server startup failed:", err);
  });
