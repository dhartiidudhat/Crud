import Joi from "joi";

// Define a schema to validate user data
export const userSchema = Joi.object({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": "Username should be a type of 'text'",
    "string.empty": "Username cannot be empty",
    "string.min": "Username should have a minimum length of 3",
    "any.required": "Username is a required field",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email",
    "any.required": "Email is a required field",
  }),
  contactNumber: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(10)
    .max(15)
    .required()
    .messages({
      "string.pattern.base": "Contact number must only contain digits",
      "string.min": "Contact number must be at least 10 digits",
      "string.max": "Contact number must not exceed 15 digits",
      "any.required": "Contact number is a required field",
    }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password should be at least 6 characters long",
    "any.required": "Password is a required field",
  }),
});

// Schema for updating a user
export const updateUserSchema = Joi.object({
  userName: Joi.string().min(3),
  email: Joi.string().email(),
  contactNumber: Joi.string().min(10),
  password: Joi.string().min(6),
}).min(1); // At least one field is required for an update
