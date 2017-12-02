package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.RecipeCreator;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecipeCreatorRepository extends CrudRepository<RecipeCreator, String> {
    List<RecipeCreator> findByName(String name);
}
