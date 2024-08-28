import { Recipe } from "../models/recipiesModels.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: `Fail to create Recipe ${err}` });
  }
};

export const readAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.readAll();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: `Fail to load Recipe ${err}` });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await Recipe.update(id, data);
    res.status(202).send(`Recipe with id ${id} was successfully updated`);
  } catch (err) {
    res.status(500).json({ error: `Fail to update Recipe ${err}` });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    await Recipe.delete(id);
    res.status(202).send(`Recipe with id ${id} was successfully deleted`);
  } catch (err) {
    res.status(500).json({ error: `Fail to delete Recipe ${err}` });
  }
};
