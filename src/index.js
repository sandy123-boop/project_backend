import dotenv from "dotenv";
import { app } from "./app.js";          // Import the configured app
import connectDB from "./db/index.js";
import { validateEnvVars } from "./utils/envValidation.js";

dotenv.config({ path: "./.env" });

// Validate environment variables before starting the server
validateEnvVars();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
