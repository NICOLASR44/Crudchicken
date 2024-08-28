import express from "express";
import { initDB } from "./utils/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/recipes", recipeRoutes);

initDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
