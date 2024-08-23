import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res, next) => {
    const newResume = await Recipe({ ...req.body });

    try {
        const savedResume = await newResume.save();
        res.status(200).json(savedResume);
    } catch (err) {
        next(err);
    }
}

export const updateRecipe = async (req, res, next) => {
    let { recipeId } = req.params; //recipe id
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            recipeId,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRecipe);
    } catch (err) {
        next(err);
    }
}

export const deleteRecipe = async (req, res, next) => {
    const { recipeId } = req.params;
    try {
        await Recipe.findByIdAndDelete(recipeId);
        res.status(200).json("Recipe has been deleted");
    } catch (err) {
        next(err);
    }
}

export const getRecipe = async (req, res, next) => {
    let { recipeId } = req.params; //resume id
    try {
        const recipe = await Recipe.findById(recipeId);
        res.status(200).json(recipe);
    } catch (err) {
        next(err);
    }
}

export const getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    } catch (err) {
        next(err);
    }
}