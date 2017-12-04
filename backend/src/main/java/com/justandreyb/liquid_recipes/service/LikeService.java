package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Like;
import com.justandreyb.liquid_recipes.repository.LikeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService extends EntityService<Like, LikeRepository> {

    public List<Like> getAllByFlavor(String id) {
        return null;
    }

    public void addToFlavor(String id, Like like) {

    }

    public List<Like> getAllByNews(String id) {
        return null;
    }

    public void addToNews(String id, Like like) {

    }

    public List<Like> getAllByRecipe(String id) {
        return null;
    }

    public void addToRecipe(String id, Like like) {

    }
}
