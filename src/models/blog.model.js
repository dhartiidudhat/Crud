import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Blog = sequelize.define(
  "Blog",
  {
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "Blogs",
  }
);

export { Blog };
