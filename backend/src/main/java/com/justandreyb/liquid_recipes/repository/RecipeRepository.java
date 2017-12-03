package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, String> {
    List<Recipe> findByName(String name);
    List<Recipe> findAllByCreatorId(String creatorId);
}
