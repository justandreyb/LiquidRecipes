package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService extends EntityService<Comment, CommentRepository> {

    public List<Comment> getAllByFlavor(String id) {
        return null;
    }

    public void addToFlavor(String id, Comment comment) {

    }

    public List<Comment> getAllByNews(String id) {
        return null;
    }

    public void addToNews(String id, Comment comment) {

    }

    public List<Comment> getAllByRecipe(String id) {
        return null;
    }

    public void addToRecipe(String id, Comment comment) {

    }
}
