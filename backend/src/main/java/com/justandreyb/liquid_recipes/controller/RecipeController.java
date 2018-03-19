package com.justandreyb.liquid_recipes.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.justandreyb.liquid_recipes.config.ImageResolutions;
import com.justandreyb.liquid_recipes.config.annotation.CheckRoles;
import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.RecipeDto;
import com.justandreyb.liquid_recipes.dto.RecipeItemDto;
import com.justandreyb.liquid_recipes.entity.Recipe;
import com.justandreyb.liquid_recipes.entity.RecipeItem;

import lombok.val;

import static com.justandreyb.liquid_recipes.config.Roles.ADMIN;
import static com.justandreyb.liquid_recipes.config.Roles.CLIENT;

@RestController
@RequestMapping("/recipes")
public class RecipeController extends ApplicationController {

    @GetMapping
    List<RecipeDto> getRecipes() {
        return recipeMapper.toRecipesDtos(recipeService.getAll());
    }

    @GetMapping("/{id}")
    RecipeDto getRecipe(@PathVariable("id") String id) {
        return recipeMapper.toRecipeDto(recipeService.get(id));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping
    RecipeDto addRecipe(@RequestBody RecipeDto recipeDto) {
        val recipe = recipeMapper.fromRecipeDto(recipeDto);
        recipe.setImage(imageService.safeGet(recipeDto.getImageId(), ImageResolutions.MEDIUM));
        recipe.setCreator(userService.getCurrentUser());
        recipe.setFlavors(recipeDto.getFlavors()
                .stream()
                .map(this::addRecipeItem)
                .collect(Collectors.toSet()));
        return recipeMapper.toRecipeDto(recipeService.add(recipe));
    }

    private RecipeItem addRecipeItem(RecipeItemDto recipeItemDto) {
        val item = recipeItemMapper.fromRecipeItemDto(recipeItemDto);
        item.setFlavor(flavorService.get(recipeItemDto.getFlavorId()));
        return recipeItemService.add(item);
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/items")
    RecipeItemDto addItemToRecipe(@PathVariable("id") String id, @RequestBody RecipeItemDto recipeItemDto) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        val recipeItem = recipeItemMapper.fromRecipeItemDto(recipeItemDto);
        recipeItem.setFlavor(flavorService.get(recipeItemDto.getFlavorId()));
        return recipeItemMapper.toRecipeItemDto(recipeItemService.addToRecipe(id, recipeItem));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}")
    RecipeDto updateRecipe(@PathVariable("id") String id, @RequestParam RecipeDto recipeDto) {
        checkThatCurrentUserIsCreatorOfEntity(recipeDto.getCreatorId());

        Recipe recipe = recipeMapper.fromRecipeDto(recipeDto);
        recipe.setImage(imageService.safeGet(recipeDto.getImageId(), ImageResolutions.MEDIUM));
        recipe.setCreator(userService.getCurrentUser());
        recipe.setFlavors(recipeService.get(id).getFlavors());
        return recipeMapper.toRecipeDto(recipeService.update(id, recipe));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/items/{itemId}")
    RecipeItemDto updateItemInRecipe(@PathVariable("id") String id, @PathVariable("itemId") String itemId,
                                     @RequestBody RecipeItemDto recipeItemDto) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        val recipeItem = recipeItemMapper.fromRecipeItemDto(recipeItemDto);
        recipeItem.setFlavor(flavorService.get(recipeItemDto.getFlavorId()));
        return recipeItemMapper.toRecipeItemDto(recipeItemService.update(itemId, recipeItem));
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}")
    void deleteRecipe(@PathVariable("id") String id) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        recipeService.delete(id);
    }

    @GetMapping("/top")
    List<RecipeDto> getTop10Recipes() {
        return recipeMapper.toRecipesDtos(recipeService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<RecipeDto> getTopNumberRecipes(@RequestParam int number) {
        return recipeMapper.toRecipesDtos(recipeService.getTop(number));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/comments")
    CommentDto addCommentToRecipe(@PathVariable("id") String id, @RequestBody CommentDto commentDto) {
        val comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDto(commentService.addToRecipe(id, comment));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/likes")
    LikeDto addLikeToRecipe(@PathVariable("id") String id, @RequestBody LikeDto likeDto) {
        val like = likeMapper.fromLikeDto(likeDto);
        like.setUser(userService.getCurrentUser());
        return likeMapper.toLikeDto(likeService.addToRecipe(id, like));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/image")
    ImageDto addImageToRecipe(@PathVariable("id") String id, @RequestBody ImageDto imageDto) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        val image = imageMapper.fromImageDto(imageDto);
        return imageMapper.toImageDto(imageService.addToRecipe(id, image));
    }

    @CheckRoles({ADMIN, CLIENT})
    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInRecipe(@PathVariable("commentId") String id, @RequestBody CommentDto commentDto) {
        checkThatCurrentUserIsCreatorOfEntity(commentDto.getUserId());

        val comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDtoWithOnlyId(commentService.update(id, comment));
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/items/{itemId}")
    void deleteItemFromRecipe(@PathVariable("id") String id, @PathVariable("itemId") String itemId) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        recipeItemService.delete(itemId);
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromRecipe(@PathVariable("commentId") String commentId) {
        val comment = commentService.get(commentId);
        checkThatCurrentUserIsCreatorOfEntity(comment.getUser().getId());

        commentService.delete(commentId);
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromRecipe(@PathVariable("likeId") String likeId) {
        val like = likeService.get(likeId);
        checkThatCurrentUserIsCreatorOfEntity(like.getUser().getId());

        likeService.delete(likeId);
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/image")
    void deleteImageFromRecipe(@PathVariable("id") String id, @RequestBody ImageDto image) {
        checkThatCurrentUserIsCreatorOfEntity(recipeService.get(id).getCreator().getId());

        imageService.delete(imageMapper.fromImageDto(image));
    }

}
