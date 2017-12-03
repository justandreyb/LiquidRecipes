package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Recipe;
import com.justandreyb.liquid_recipes.repository.RecipeRepository;
import org.springframework.stereotype.Service;

@Service
public class RecipeService extends EntityService<Recipe, RecipeRepository> {
}
