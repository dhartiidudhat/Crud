import { User } from "./user.model.js";
import { Blog } from "./blog.model.js";
import { Comment } from "./comment.model.js";

//Set up the foreignKey

User.hasMany(Blog, { foreignKey: "userId" });
Blog.belongsTo(User, { foreignKey: "userId" }); // Correct the typo here

// User has many Comments
User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

export { User, Blog };
