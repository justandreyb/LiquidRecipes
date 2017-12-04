package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.repository.ImageRepository;
import org.springframework.stereotype.Service;

@Service
public class ImageService extends EntityService<Image, ImageRepository> {

    public Image getByFlavor(String id) {
        return null;
    }

    public void addToFlavor(String id, Image image) {

    }

    public Image getByNews(String id) {
        return null;
    }

    public void addToNews(String id, Image image) {

    }

    public Image getByRecipe(String id) {
        return null;
    }

    public void addToRecipe(String id, Image image) {

    }
}
