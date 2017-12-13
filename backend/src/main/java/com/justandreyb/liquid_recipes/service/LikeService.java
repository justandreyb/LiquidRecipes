package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Like;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.LikeRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class LikeService extends EntityService<Like, LikeRepository> {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private RecipeService recipeService;

    public Collection<Like> getAllByFlavor(String id) {
        val flavor = flavorService.get(id);

        return flavor.getLikes();
    }

    public Collection<Like> getAllByNews(String id) {
        val news = newsService.get(id);

        return news.getLikes();
    }

    public Collection<Like> getAllByRecipe(String id) {
        val recipe = recipeService.get(id);

        return recipe.getLikes();
    }

    public Like addToFlavor(String id, Like like) throws InvalidEntityException, NotFoundException {
        checkEntity(like);
        repository.save(like);

        val flavor = flavorService.get(id);
        flavor.getLikes().add(like);
        flavorService.update(flavor);

        return like;
    }

    public Like addToNews(String id, Like like) throws InvalidEntityException, NotFoundException {
        checkEntity(like);
        like = repository.save(like);

        val news = newsService.get(id);
        news.getLikes().add(like);
        newsService.update(news);

        return like;
    }

    public Like addToRecipe(String id, Like like) throws InvalidEntityException, NotFoundException {
        checkEntity(like);
        like = repository.save(like);

        val recipe = recipeService.get(id);
        recipe.getLikes().add(like);
        recipeService.update(recipe);

        return like;
    }
}
