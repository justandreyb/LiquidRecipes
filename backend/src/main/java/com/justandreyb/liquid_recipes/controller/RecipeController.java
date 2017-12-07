package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.*;
import com.justandreyb.liquid_recipes.mapper.*;
import com.justandreyb.liquid_recipes.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;
    @Autowired
    private RecipeItemService recipeItemService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private ImageService imageService;

    @Autowired
    private RecipeMapper recipeMapper;
    @Autowired
    private RecipeItemMapper recipeItemMapper;
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private ImageMapper imageMapper;

    @GetMapping
    List<RecipeDto> getAllRecipes() {
        return recipeMapper.toRecipeDtos(recipeService.getAll());
    }

    @GetMapping("/top")
    List<RecipeDto> getTop10Recipes() {
        return recipeMapper.toRecipeDtos(recipeService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<RecipeDto> getTopNumberRecipes(@RequestParam int number) {
        return recipeMapper.toRecipeDtos(recipeService.getTop(number));
    }

    @GetMapping("/{id}")
    RecipeDto getRecipe(@PathVariable("id") String id) {
        return recipeMapper.toFullRecipeDto(recipeService.get(id));
    }

    @GetMapping("/{id}/items")
    List<RecipeItemDto> getRecipeItems(@PathVariable("id") String id) {
        return recipeItemMapper.toRecipeItemDtos(recipeItemService.getAllByRecipe(id));
    }

    @GetMapping("/{id}/comments")
    List<CommentDto> getRecipeComments(@PathVariable("id") String id) {
        return commentMapper.toCommentDtos(commentService.getAllByRecipe(id));
    }

    @GetMapping("/{id}/likes")
    List<LikeDto> getRecipeLikes(@PathVariable("id") String id) {
        return likeMapper.toLikeDtos(likeService.getAllByRecipe(id));
    }

    @GetMapping("/{id}/image")
    ImageDto getRecipeImage(@PathVariable("id") String id) {
        return imageMapper.toFullImageDto(imageService.getByRecipe(id));
    }

    @PostMapping
    void addRecipe(@RequestBody RecipeDto recipeDto) {
        recipeService.add(recipeMapper.fromRecipeDto(recipeDto));
    }

    @PostMapping("/{id}")
    void updateRecipe(@RequestParam RecipeDto recipeDto) {
        recipeService.update(recipeMapper.fromRecipeDto(recipeDto));
    }

    @PostMapping("/{id}/items")
    void addItemToRecipe(@PathVariable("id") String id, @RequestBody RecipeItemDto recipeItem) {
        recipeItemService.addToRecipe(id, recipeItemMapper.fromRecipeItemDto(recipeItem));
    }

    @PostMapping("/{id}/items/{itemId}")
    void updateItemInRecipe(@RequestBody RecipeItemDto recipeItem) {
        recipeItemService.update(recipeItemMapper.fromRecipeItemDto(recipeItem));
    }

    @PostMapping("/{id}/comments")
    void addCommentToRecipe(@PathVariable("id") String id, @RequestBody CommentDto comment) {
        commentService.addToRecipe(id, commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/comments/{commentId}")
    void updateCommentInRecipe(@RequestBody CommentDto comment) {
        commentService.update(commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/likes")
    void addLikeToRecipe(@PathVariable("id") String id, @RequestBody LikeDto like) {
        likeService.addToRecipe(id, likeMapper.fromLikeDto(like));
    }

    @PostMapping("/{id}/image")
    void addLikeToRecipe(@PathVariable("id") String id, @RequestBody ImageDto image) {
        imageService.addToRecipe(id, imageMapper.fromImageDto(image));
    }

    @DeleteMapping("/{id}")
    void deleteRecipe(@PathVariable("id") String id) {
        recipeService.delete(id);
    }

    @DeleteMapping("/{id}/items/{itemId}")
    void deleteItemFromRecipe(@PathVariable("itemId") String itemId) {
        recipeItemService.delete(itemId);
    }

    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromRecipe(@PathVariable("commentId") String commentId) {
        commentService.delete(commentId);
    }

    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromRecipe(@PathVariable("likeId") String likeId) {
        likeService.delete(likeId);
    }

    @DeleteMapping("/{id}/image")
    void deleteImageFromRecipe(@RequestBody ImageDto image) {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
