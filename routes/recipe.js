import express from 'express';
import { createRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from '../controllers/recipeController.js';

const router = express.Router();

//CREATE
router.post("/", createRecipe);

//UPDATE
router.put("/:recipeId", updateRecipe);

//DELETE
router.delete("/:recipeId", deleteRecipe);

//GET
router.get("/:recipeId", getRecipe);

//GET ALL
router.get("/", getAllRecipes);

export default router;