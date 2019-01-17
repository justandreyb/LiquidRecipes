package com.justandreyb.liquid_recipes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.val;

import com.justandreyb.liquid_recipes.config.annotation.CheckRoles;
import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.FlavorTypeDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.entity.Like;

import static com.justandreyb.liquid_recipes.config.Roles.ADMIN;
import static com.justandreyb.liquid_recipes.config.Roles.CLIENT;

@RestController
@RequestMapping("/flavors")
public class FlavorController extends ApplicationController {

    @GetMapping
    List<FlavorDto> getFlavors() {
        return flavorMapper.toFlavorsDtos(flavorService.getAll());
    }

    @GetMapping("/{id}")
    FlavorDto getFlavor(@PathVariable("id") String id) {
        return flavorMapper.toFlavorDto(flavorService.get(id));
    }

    @CheckRoles(ADMIN)
    @PostMapping
    FlavorDto addFlavor(@RequestBody FlavorDto flavorDto) {
        val flavor = flavorMapper.fromFlavorDto(flavorDto);
        flavor.setImage(imageService.safeGet(flavorDto.getImageId()));
        flavor.setFlavorType(flavorTypeService.safeGet(flavorDto.getFlavorTypeId()));
        flavor.setManufacturer(manufacturerService.safeGet(flavorDto.getManufacturerId()));
        return flavorMapper.toFlavorDto(flavorService.add(flavor));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}")
    FlavorDto updateFlavor(@PathVariable("id") String id, @RequestParam FlavorDto flavorDto) {
        val flavor = flavorMapper.fromFlavorDto(flavorDto);
        flavor.setImage(imageService.safeGet(flavorDto.getImageId()));
        flavor.setFlavorType(flavorTypeService.safeGet(flavorDto.getFlavorTypeId()));
        flavor.setManufacturer(manufacturerService.safeGet(flavorDto.getManufacturerId()));
        return flavorMapper.toFlavorDto(flavorService.update(id, flavor));
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}")
    void deleteFlavor(@PathVariable("id") String id) {
        flavorService.delete(id);
    }

    @GetMapping("/types")
    List<FlavorTypeDto> getFlavorTypes() {
        return flavorTypeMapper.toFlavorTypeDtos(flavorTypeService.getAll());
    }

    @GetMapping("/top")
    List<FlavorDto> getTop10Flavors() {
        return flavorMapper.toFlavorsDtos(flavorService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<FlavorDto> getTopNumberFlavors(@PathVariable("number") int number) {
        return flavorMapper.toFlavorsDtos(flavorService.getTop(number));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/comments")
    CommentDto addCommentToFlavor(@PathVariable("id") String id, @RequestBody CommentDto commentDto) {
        Comment comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDto(commentService.addToFlavor(id, comment));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInFlavor(@PathVariable("commentId") String id, @RequestBody CommentDto commentDto) {
        checkThatCurrentUserIsCreatorOfEntity(commentDto.getUserId());

        Comment comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDto(commentService.update(id, comment));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/likes")
    LikeDto addLikeToFlavor(@PathVariable("id") String id, @RequestBody LikeDto likeDto) {
        Like like = likeMapper.fromLikeDto(likeDto);
        like.setUser(userService.getCurrentUser());
        return likeMapper.toLikeDto(likeService.addToFlavor(id, like));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}/image")
    ImageDto addImageToFlavor(@PathVariable("id") String id, @RequestBody ImageDto imageDto) {
        val image = imageMapper.fromImageDto(imageDto);
        return imageMapper.toImageDto(imageService.addToFlavor(id, image));
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromFlavor(@PathVariable("commentId") String commentId) {
        val comment = commentService.get(commentId);
        checkThatCurrentUserIsCreatorOfEntity(comment.getUser().getId());

        commentService.delete(commentId);
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromFlavor(@PathVariable("likeId") String likeId) {
        val like = likeService.get(likeId);
        checkThatCurrentUserIsCreatorOfEntity(like.getUser().getId());

        likeService.delete(likeId);
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}/image")
    void deleteImageFromFlavor(@RequestBody ImageDto image) {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
