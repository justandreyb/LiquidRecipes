package com.justandreyb.liquid_recipes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.config.Roles;
import com.justandreyb.liquid_recipes.exception.SecurityException;
import com.justandreyb.liquid_recipes.mapper.CommentMapper;
import com.justandreyb.liquid_recipes.mapper.CountryMapper;
import com.justandreyb.liquid_recipes.mapper.FlavorMapper;
import com.justandreyb.liquid_recipes.mapper.FlavorTypeMapper;
import com.justandreyb.liquid_recipes.mapper.ImageMapper;
import com.justandreyb.liquid_recipes.mapper.LikeMapper;
import com.justandreyb.liquid_recipes.mapper.ManufacturerMapper;
import com.justandreyb.liquid_recipes.mapper.NewsMapper;
import com.justandreyb.liquid_recipes.mapper.RecipeItemMapper;
import com.justandreyb.liquid_recipes.mapper.RecipeMapper;
import com.justandreyb.liquid_recipes.mapper.UserMapper;
import com.justandreyb.liquid_recipes.service.CommentService;
import com.justandreyb.liquid_recipes.service.CountryService;
import com.justandreyb.liquid_recipes.service.FlavorService;
import com.justandreyb.liquid_recipes.service.FlavorTypeService;
import com.justandreyb.liquid_recipes.service.ImageService;
import com.justandreyb.liquid_recipes.service.LikeService;
import com.justandreyb.liquid_recipes.service.ManufacturerService;
import com.justandreyb.liquid_recipes.service.NewsService;
import com.justandreyb.liquid_recipes.service.RecipeItemService;
import com.justandreyb.liquid_recipes.service.RecipeService;
import com.justandreyb.liquid_recipes.service.UserService;

@Component
public abstract class ApplicationController {

    @Autowired
    protected UserService userService;
    @Autowired
    protected UserMapper userMapper;

    @Autowired
    protected RecipeService recipeService;
    @Autowired
    protected RecipeMapper recipeMapper;

    @Autowired
    protected RecipeItemService recipeItemService;
    @Autowired
    protected RecipeItemMapper recipeItemMapper;

    @Autowired
    protected CommentService commentService;
    @Autowired
    protected CommentMapper commentMapper;

    @Autowired
    protected LikeService likeService;
    @Autowired
    protected LikeMapper likeMapper;

    @Autowired
    protected ImageService imageService;
    @Autowired
    protected ImageMapper imageMapper;

    @Autowired
    protected FlavorService flavorService;
    @Autowired
    protected FlavorMapper flavorMapper;

    @Autowired
    protected NewsService newsService;
    @Autowired
    protected NewsMapper newsMapper;

    @Autowired
    protected CountryService countryService;
    @Autowired
    protected CountryMapper countryMapper;

    @Autowired
    protected FlavorTypeService flavorTypeService;
    @Autowired
    protected FlavorTypeMapper flavorTypeMapper;

    @Autowired
    protected ManufacturerService manufacturerService;
    @Autowired
    protected ManufacturerMapper manufacturerMapper;

    protected void checkThatCurrentUserIsCreatorOfEntity(String creatorId) {
        String currentUserId = (String) SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getPrincipal();

        boolean creator = ((creatorId != null && currentUserId != null) && creatorId.equals(currentUserId)) ||
            SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getAuthorities()
                .stream()
                .noneMatch(authority -> Roles.ADMIN.getValue().equals(authority.getAuthority()));

        if (!creator) {
            throw new SecurityException("Only creator of this entity can perform this action");
        }
    }

}
