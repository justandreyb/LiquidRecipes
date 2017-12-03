package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.RecipeItem;
import com.justandreyb.liquid_recipes.repository.RecipeItemRepository;
import org.springframework.stereotype.Service;

@Service
public class RecipeItemService extends EntityService<RecipeItem, RecipeItemRepository> {
}