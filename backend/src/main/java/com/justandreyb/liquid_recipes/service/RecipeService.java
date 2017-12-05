package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Recipe;
import com.justandreyb.liquid_recipes.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class RecipeService extends EntityService<Recipe, RecipeRepository> {
    public Collection<Recipe> getTop(int number) {
        return null;
    }
}
