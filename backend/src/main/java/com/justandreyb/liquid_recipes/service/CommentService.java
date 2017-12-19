package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.CommentRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

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

    public Comment addToFlavor(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getGuest());
        comment = repository.save(comment);

        val flavor = flavorService.get(id);
        flavor.getComments().add(comment);
        flavorService.update(flavor);

        return comment;
    }

    public Comment addToNews(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getGuest());
        comment = repository.save(comment);

        val news = newsService.get(id);
        news.getComments().add(comment);
        newsService.update(news);

        return comment;
    }

    public Comment addToRecipe(String id, Comment comment) throws InvalidEntityException, NotFoundException {
        checkEntity(comment);
        comment.setUser(userService.getGuest());
        comment = repository.save(comment);

        val recipe = recipeService.get(id);
        recipe.getComments().add(comment);
        recipeService.update(recipe);

        return comment;
    }
}
