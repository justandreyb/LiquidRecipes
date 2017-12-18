package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.*;
import com.justandreyb.liquid_recipes.entity.RecipeItem;
import com.justandreyb.liquid_recipes.mapper.*;
import com.justandreyb.liquid_recipes.service.*;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;
    @Autowired
    private UserService userService;
    @Autowired
    private RecipeItemService recipeItemService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private ImageService imageService;
    @Autowired
    private FlavorService flavorService;

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
    RecipeDto addRecipe(@RequestBody RecipeDto recipeDto) {
        val recipe = recipeMapper.fromRecipeDto(recipeDto);
        recipe.setImage(imageService.getPlaceholderImage());
        recipe.setCreator(userService.getGuest());
        Set<RecipeItem> items = recipeDto.getFlavors().stream().map((recipeItemDto -> {
            RecipeItem item = new RecipeItem();
            item.setDrops(recipeItemDto.getDrops());
            item.setMl(recipeItemDto.getMl());
            item.setFlavor(flavorService.get(recipeItemDto.getFlavorId()));

            return recipeItemService.add(item);
        })).collect(Collectors.toSet());
        recipe.setFlavors(items);
        return recipeMapper.toRecipeDto(recipeService.add(recipe));
    }

    @PostMapping("/{id}")
    RecipeDto updateRecipe(@RequestParam RecipeDto recipeDto) {
        val recipe = recipeService.update(recipeMapper.fromRecipeDto(recipeDto));
        return recipeMapper.toRecipeDto(recipe);
    }

    @PostMapping("/{id}/items")
    RecipeItemDto addItemToRecipe(@PathVariable("id") String id, @RequestBody RecipeItemDto recipeItem) {
        val createdItem = recipeItemService.addToRecipe(id, recipeItemMapper.fromRecipeItemDto(recipeItem));
        return recipeItemMapper.toRecipeItemDto(createdItem);
    }

    @PostMapping("/{id}/items/{itemId}")
    RecipeItemDto updateItemInRecipe(@RequestBody RecipeItemDto recipeItem) {
        val updatedItem = recipeItemService.update(recipeItemMapper.fromRecipeItemDto(recipeItem));
        return recipeItemMapper.toRecipeItemDto(updatedItem);
    }

    @PostMapping("/{id}/comments")
    CommentDto addCommentToRecipe(@PathVariable("id") String id, @RequestBody CommentDto comment) {
        val createdComment = commentService.addToRecipe(id, commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(createdComment);
    }

    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInRecipe(@RequestBody CommentDto comment) {
        val updatedComment = commentService.update(commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(updatedComment);
    }

    @PostMapping("/{id}/likes")
    LikeDto addLikeToRecipe(@PathVariable("id") String id, @RequestBody LikeDto like) {
        val createdLike = likeService.addToRecipe(id, likeMapper.fromLikeDto(like));
        return likeMapper.toLikeDto(createdLike);
    }

    @PostMapping("/{id}/image")
    ImageDto addImageToRecipe(@PathVariable("id") String id, @RequestBody ImageDto image) {
        val createdImage = imageService.addToRecipe(id, imageMapper.fromImageDto(image));
        return imageMapper.toImageDto(createdImage);
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
