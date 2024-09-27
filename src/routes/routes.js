import express from "express";
import {
  addUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

import {
  userSchema,
  updateUserSchema,
} from "./../validationSchema/userValidationSchema.js";
import { validateRequest } from "./../middleware/userValidation.js";
import { addBlog } from "../controller/blog.controler.js";
import upload from "../middleware/imageUpload.js";
const router = express();

router.post("/adduser", validateRequest(userSchema), addUser);
// Route for updating a user with validation
router.put("/updateuser/:id", validateRequest(updateUserSchema), updateUser);

// Route for deleting a user
router.delete("/deleteuser/:id", deleteUser);
router.post("/addblog", upload.single("blogImage"), addBlog);

export default router;
