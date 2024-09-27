import { User } from "../models/user.model.js"; // Import the User model
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  try {
    // Destructure user data from the request body
    const { userName, email, contactNumber, password } = req.body;

    // Create a new user record
    const newUser = await User.create({
      userName,
      email,
      contactNumber,
      Password: password, // Make sure to hash the password before saving it
    });

    // Respond with the newly created user data
    res.status(201).json({
      message: "User added successfully",
      user: {
        id: newUser.id,
        userName: newUser.userName,
        email: newUser.email,
        contactNumber: newUser.contactNumber,
      },
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({
      message: "An error occurred while adding the user",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from the request parameters
    const { userName, email, contactNumber, password } = req.body; // Get updated data from request body

    // Find the user by ID
    const user = await User.findByPk(id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Update user data
    // Optionally hash the password if it's being updated
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.Password = hashedPassword; // Update the password if provided
    }

    user.userName = userName || user.userName; // Update userName if provided
    user.email = email || user.email; // Update email if provided
    user.contactNumber = contactNumber || user.contactNumber; // Update contactNumber if provided

    // Save the updated user
    await user.save();

    // Respond with the updated user data
    res.status(200).json({
      message: "User updated successfully",
      user: {
        id: user.id,
        userName: user.userName,
        email: user.email,
        contactNumber: user.contactNumber,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      message: "An error occurred while updating the user",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from the request parameters

    // Find the user by ID and delete
    const user = await User.findByPk(id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Delete the user
    await user.destroy();

    // Respond with a success message
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      message: "An error occurred while deleting the user",
      error: error.message,
    });
  }
};

export { addUser, updateUser, deleteUser };
