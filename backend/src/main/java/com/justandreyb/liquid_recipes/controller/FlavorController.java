package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.FlavorDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.mapper.CommentMapper;
import com.justandreyb.liquid_recipes.mapper.FlavorMapper;
import com.justandreyb.liquid_recipes.mapper.ImageMapper;
import com.justandreyb.liquid_recipes.mapper.LikeMapper;
import com.justandreyb.liquid_recipes.service.CommentService;
import com.justandreyb.liquid_recipes.service.FlavorService;
import com.justandreyb.liquid_recipes.service.ImageService;
import com.justandreyb.liquid_recipes.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flavors")
public class FlavorController {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private ImageService imageService;

    @Autowired
    private FlavorMapper flavorMapper;
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private ImageMapper imageMapper;

    @GetMapping
    List<FlavorDto> getAllFlavors() {
        return flavorMapper.toFlavorDtos(flavorService.getAll());
    }

    @GetMapping("/top")
    List<FlavorDto> getTop10Flavors() {
        return flavorMapper.toFlavorDtos(flavorService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<FlavorDto> getTopNumberFlavors(@PathVariable("number") int number) {
        return flavorMapper.toFlavorDtos(flavorService.getTop(number));
    }

    @GetMapping("/{id}")
    FlavorDto getFlavor(@PathVariable("id") String id) throws NotFoundException {
        return flavorMapper.toFlavorDto(flavorService.get(id));
    }

    @GetMapping("/{id}/comments")
    List<CommentDto> getFlavorComments(@PathVariable("id") String id) throws NotFoundException {
        return commentMapper.toCommentDtos(commentService.getAllByFlavor(id));
    }

    @GetMapping("/{id}/likes")
    List<LikeDto> getFlavorLikes(@PathVariable("id") String id) {
        return likeMapper.toLikeDtos(likeService.getAllByFlavor(id));
    }

    @GetMapping("/{id}/image")
    ImageDto getFlavorImage(@PathVariable("id") String id) {
        return imageMapper.toImageDto(imageService.getByFlavor(id));
    }

    @PostMapping
    void addFlavor(@RequestBody FlavorDto flavorDto) throws InvalidEntityException {
        flavorService.add(flavorMapper.fromFlavorDto(flavorDto));
    }

    @PostMapping("/{id}")
    void updateFlavor(@RequestParam FlavorDto flavorDto) throws InvalidEntityException {
        flavorService.update(flavorMapper.fromFlavorDto(flavorDto));
    }

    @PostMapping("/{id}/comments")
    void addCommentToFlavor(@PathVariable("id") String id, @RequestBody CommentDto comment) throws NotFoundException, InvalidEntityException {
        commentService.addToFlavor(id, commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/comments/{commentId}")
    void updateCommentInFlavor(@RequestBody CommentDto comment) throws InvalidEntityException {
        commentService.update(commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/likes")
    void addLikeToFlavor(@PathVariable("id") String id, @RequestBody LikeDto like) throws NotFoundException, InvalidEntityException {
        likeService.addToFlavor(id, likeMapper.fromLikeDto(like));
    }

    @PostMapping("/{id}/image")
    void addLikeToFlavor(@PathVariable("id") String id, @RequestBody ImageDto image) throws NotFoundException, InvalidEntityException {
        imageService.addToFlavor(id, imageMapper.fromImageDto(image));
    }

    @DeleteMapping("/{id}")
    void deleteFlavor(@PathVariable("id") String id) throws NotFoundException {
        flavorService.delete(id);
    }

    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromFlavor(@PathVariable("commentId") String commentId) throws NotFoundException {
        commentService.delete(commentId);
    }

    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromFlavor(@PathVariable("likeId") String likeId) throws NotFoundException {
        likeService.delete(likeId);
    }

    @DeleteMapping("/{id}/image")
    void deleteImageFromFlavor(@RequestBody ImageDto image) throws NotFoundException {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
