package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.RecipeItem;
import com.justandreyb.liquid_recipes.repository.RecipeItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeItemService extends EntityService<RecipeItem, RecipeItemRepository> {
    public List<RecipeItem> getAllByRecipe(String id) {
        return null;
    }

    public void addToRecipe(String id, RecipeItem recipeItem) {

    }
}