package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.RecipeItem;
import org.springframework.data.repository.CrudRepository;

public interface RecipeItemRepository extends CrudRepository<RecipeItem, String> {
}
