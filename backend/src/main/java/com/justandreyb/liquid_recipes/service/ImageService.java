package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Image;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.repository.ImageRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService extends EntityService<Image, ImageRepository> {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private RecipeService recipeService;

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

    public void addToFlavor(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        val flavor = flavorService.get(id);

        flavor.setImage(image);

        flavorService.update(flavor);
    }

    public void addToNews(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        val news = newsService.get(id);

        news.setImage(image);

        newsService.update(news);
    }

    public void addToRecipe(String id, Image image) throws InvalidEntityException, NotFoundException {
        checkEntity(image);
        val recipe = recipeService.get(id);

        recipe.setImage(image);

        recipeService.update(recipe);
    }
}
