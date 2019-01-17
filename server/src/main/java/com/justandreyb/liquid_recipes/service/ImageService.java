package com.justandreyb.liquid_recipes.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.val;

import com.justandreyb.liquid_recipes.config.ImageResolutions;
import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.ImageRepository;

@Service
public class ImageService extends EntityService<Image, ImageRepository> {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private RecipeService recipeService;

    public Image safeGet(String imageId, ImageResolutions imageResolution) throws NotFoundException {
        Image image;
        try {
            image = super.get(imageId);
        } catch (NotFoundException e) {
            image = getPlaceholderImage(imageResolution);
        }
        return image;
    }

    public Image getByFlavor(String id) {
        val image = flavorService.get(id).getImage();
        checkEntity(image);

        return image;
    }

    public Image getByNews(String id) {
        val image = newsService.get(id).getImage();
        checkEntity(image);

        return image;
    }

    public Image getByRecipe(String id) {
        val image = recipeService.get(id).getImage();
        checkEntity(image);

        return image;
    }

    public Image addToFlavor(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        image = repository.save(image);

        val flavor = flavorService.get(id);
        flavor.setImage(image);
        flavorService.update(id, flavor);

        return image;
    }

    public Image addToNews(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        image = repository.save(image);

        val news = newsService.get(id);
        news.setImage(image);
        newsService.update(id, news);

        return image;
    }

    public Image addToRecipe(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        image = repository.save(image);

        val recipe = recipeService.get(id);
        recipe.setImage(image);
        recipeService.update(id, recipe);

        return image;
    }

    public Image getPlaceholderImage(ImageResolutions imageResolution) {
        Image placeholder = repository.findByPathContains("placeholder.com/" + imageResolution.getResolution());
        if (placeholder == null) {
            placeholder = new Image();
            placeholder.setCreationDate(new Date());
            placeholder.setPath("http://via.placeholder.com/" + imageResolution.getResolution());
            placeholder = add(placeholder);
        }
        return placeholder;
    }
}
