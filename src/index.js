import dotenv from "dotenv";

// import mongoose from "mongoose";

// import { DB_Name } from "./constants.js";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Database connection failed:", err);
});











// import express from "express";
// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect('${process.env.MONGODB.URI}/${DB_Name}')
//         app.on("error",(error)=>{
//             console.log("ERRR:", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     }catch (error) {
//         console.error("ERROR :", error);
//         throw error;
//     }
// })