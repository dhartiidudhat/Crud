import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("userBlog", "root", "Harshil@1104", {
  host: "localhost",
  dialect: "mysql",
});

// Function to authenticate the connection
export const authentication = async () => {
  try {
    // Authenticate the database connection
    await sequelize.authenticate();
    console.log("Database connected successfully!");

    // Sync models (in development, use force: true to drop tables if they already exist)
    // await sequelize.sync({ force: true }); // In production, use { alter: true } or remove this line

    console.log("Database synchronized successfully!");
  } catch (error) {
    console.error("Database connection failed!", error);
  }
};

// export const authentication = async () => {
//   try {
//     sequelize.authenticate();
//     sequelize.sync({ force: true });
//     console.log("Database connected successfully!");
//   } catch (error) {
//     console.log("Database not conneted!");
//   }
// };
