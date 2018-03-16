package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.RecipeItem;

public interface RecipeItemRepository extends JpaRepository<RecipeItem, String> {
}
