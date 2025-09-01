import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";

import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

// Test endpoint to check console logging
router.route("/test-log").get((req, res) => {
    console.log("📝 Test log message from /test-log endpoint");
    console.log("🔄 Testing basic console logging...");
    console.log("✅ This should appear in server terminal");
    
    res.json({ message: "Test completed", logs: "Check server console for output" });
})

export default router;
