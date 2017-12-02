package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.Recipe;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecipeRepository extends CrudRepository<Recipe, String> {
    List<Recipe> findByName(String name);
    List<Recipe> findAllByCreatorId(String creatorId);
}
