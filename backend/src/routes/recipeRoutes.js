import express from "express";
import * as recipeControllers from "../controllers/recipeControllers.js";

const router = express.Router();

router.post("/", recipeControllers.createRecipe);

router.get("/", recipeControllers.readAllRecipes);

router.put("/:id", recipeControllers.updateRecipe);

router.delete("/:id", recipeControllers.deleteRecipe);

export default router;
