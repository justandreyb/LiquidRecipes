package com.justandreyb.liquid_recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.val;

import com.justandreyb.liquid_recipes.entity.RecipeItem;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.RecipeItemRepository;

@Service
public class RecipeItemService extends EntityService<RecipeItem, RecipeItemRepository> {

    @Autowired
    private RecipeService recipeService;

    public Iterable<RecipeItem> getAllByRecipe(String id) throws NotFoundException {
        val recipe = recipeService.get(id);
        return recipe.getFlavors();
    }

    public RecipeItem addToRecipe(String id, RecipeItem recipeItem) throws InvalidEntityException, NotFoundException {
        checkEntity(recipeItem);
        recipeItem = repository.save(recipeItem);

        val recipe = recipeService.get(id);
        recipe.getFlavors().add(recipeItem);
        recipeService.update(id, recipe);

        return recipeItem;
    }
}