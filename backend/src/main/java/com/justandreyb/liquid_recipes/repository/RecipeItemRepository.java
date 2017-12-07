package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.RecipeItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeItemRepository extends JpaRepository<RecipeItem, String> {
}
