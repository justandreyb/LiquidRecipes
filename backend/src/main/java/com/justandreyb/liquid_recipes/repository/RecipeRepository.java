package com.justandreyb.liquid_recipes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, String> {
    List<Recipe> findByName(String name);

    List<Recipe> findAllByCreatorId(String creatorId);
}
