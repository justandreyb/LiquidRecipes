package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.RecipeItem;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.RecipeItemRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class RecipeItemService extends EntityService<RecipeItem, RecipeItemRepository> {

    private static final String INVALID_RECIPE_ITEM_EXCEPTION = "validation.exception.RecipeItemRepository";

    @Autowired
    private RecipeService recipeService;

    public Collection<RecipeItem> getAllByRecipe(String id) throws NotFoundException {
        val recipe = recipeService.get(id);
        return recipe.getFlavors();
    }

    public void addToRecipe(String id, RecipeItem recipeItem) throws InvalidEntityException, NotFoundException {
        if (!recipeItem.isValid()) {
            throw new InvalidEntityException(INVALID_RECIPE_ITEM_EXCEPTION);
        }

        val recipe = recipeService.get(id);
        recipe.getFlavors().add(recipeItem);

        recipeService.update(recipe);
    }
}