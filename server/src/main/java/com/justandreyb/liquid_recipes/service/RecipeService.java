package com.justandreyb.liquid_recipes.service;

import org.springframework.stereotype.Service;

import com.justandreyb.liquid_recipes.entity.Recipe;
import com.justandreyb.liquid_recipes.repository.RecipeRepository;

@Service
public class RecipeService extends EntityService<Recipe, RecipeRepository> {

    public Iterable<Recipe> getTop(int number) {
        return getAllByRange(0, number);
    }
}
