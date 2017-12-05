package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.CommentRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CommentService extends EntityService<Comment, CommentRepository> {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private RecipeService recipeService;

    public Collection<Comment> getAllByFlavor(String id) throws NotFoundException {
        val flavor = flavorService.get(id);

        return flavor.getComments();
    }

    public Collection<Comment> getAllByNews(String id) throws NotFoundException {
        val news = newsService.get(id);

        return news.getComments();
    }

    public Collection<Comment> getAllByRecipe(String id) throws NotFoundException {
        val recipe = recipeService.get(id);

        return recipe.getComments();
    }

    public void addToFlavor(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        val flavor = flavorService.get(id);

        flavor.getComments().add(comment);

        flavorService.update(flavor);
    }

    public void addToNews(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        val news = newsService.get(id);

        news.getComments().add(comment);

        newsService.update(news);
    }

    public void addToRecipe(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        val recipe = recipeService.get(id);

        recipe.getComments().add(comment);

        recipeService.update(recipe);
    }
}
