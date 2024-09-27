import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

import { authentication } from "./src/config/db.js";
import "./src/models/index.js";

authentication();

app.listen(process.env.PORT, () => {
  console.log(`app listen on port ${process.env.PORT}`);
});
