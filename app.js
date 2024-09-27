import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the uploads directory to serve static files
app.use("/uploads", express.static("uploads"));
app.use("/api", router);

export { app };
