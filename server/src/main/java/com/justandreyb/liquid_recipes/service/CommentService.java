package com.justandreyb.liquid_recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.val;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.CommentRepository;

@Service
public class CommentService extends EntityService<Comment, CommentRepository> {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private UserService userService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private RecipeService recipeService;

    public Iterable<Comment> getAllByFlavor(String id) throws NotFoundException {
        val flavor = flavorService.get(id);

        return flavor.getComments();
    }

    public Iterable<Comment> getAllByNews(String id) throws NotFoundException {
        val news = newsService.get(id);

        return news.getComments();
    }

    public Iterable<Comment> getAllByRecipe(String id) throws NotFoundException {
        val recipe = recipeService.get(id);

        return recipe.getComments();
    }

    public Comment addToFlavor(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getCurrentUser());
        comment = repository.save(comment);

        val flavor = flavorService.get(id);
        flavor.getComments().add(comment);
        flavorService.update(id, flavor);

        return comment;
    }

    public Comment addToNews(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getCurrentUser());
        comment = repository.save(comment);

        val news = newsService.get(id);
        news.getComments().add(comment);
        newsService.update(id, news);

        return comment;
    }

    public Comment addToRecipe(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getCurrentUser());
        comment = repository.save(comment);

        val recipe = recipeService.get(id);
        recipe.getComments().add(comment);
        recipeService.update(id, recipe);

        return comment;
    }
}
