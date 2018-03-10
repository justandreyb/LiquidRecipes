package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.mapper.*;
import com.justandreyb.liquid_recipes.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public abstract class ApplicationController {

    @Autowired protected UserService userService;
    @Autowired protected UserMapper userMapper;

    @Autowired protected RecipeService recipeService;
    @Autowired protected RecipeMapper recipeMapper;

    @Autowired protected RecipeItemService recipeItemService;
    @Autowired protected RecipeItemMapper recipeItemMapper;

    @Autowired protected CommentService commentService;
    @Autowired protected CommentMapper commentMapper;

    @Autowired protected LikeService likeService;
    @Autowired protected LikeMapper likeMapper;

    @Autowired protected ImageService imageService;
    @Autowired protected ImageMapper imageMapper;

    @Autowired protected FlavorService flavorService;
    @Autowired protected FlavorMapper flavorMapper;

    @Autowired protected NewsService newsService;
    @Autowired protected NewsMapper newsMapper;

    @Autowired protected CountryService countryService;
    @Autowired protected CountryMapper countryMapper;

    @Autowired protected FlavorTypeService flavorTypeService;
    @Autowired protected FlavorTypeMapper flavorTypeMapper;

    @Autowired protected ManufacturerService manufacturerService;
    @Autowired protected ManufacturerMapper manufacturerMapper;

}
