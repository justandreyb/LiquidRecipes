package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.UsersRecipes;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsersRecipesRepository extends CrudRepository<UsersRecipes, String> {
    List<UsersRecipes> findAllByRecipeId(String recipeId);
}
