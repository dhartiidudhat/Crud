// src/controller/blog.controller.js
import { Blog } from "../models/blog.model.js";

const addBlog = async (req, res) => {
  try {
    const { blogTitle, description } = req.body;
    const blogImage = req.file.path; // Get the image path from the uploaded file

    // Create a new blog entry
    const newBlog = await Blog.create({
      blogTitle,
      description,
      blogImage,
      userId: req.user.id, // Assuming you're storing the user ID from authentication
    });

    res.status(201).json({
      message: "Blog created successfully!",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({
      message: "An error occurred while adding the blog",
      error: error.message,
    });
  }
};

export { addBlog };
