package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.*;
import com.justandreyb.liquid_recipes.mapper.*;
import com.justandreyb.liquid_recipes.service.*;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flavors")
@CrossOrigin(origins = "http://localhost:3000")
public class FlavorController {

    @Autowired
    private FlavorService flavorService;
    @Autowired
    private ManufacturerService manufacturerService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private ImageService imageService;

    @Autowired
    private FlavorMapper flavorMapper;
    @Autowired
    private ManufacturerMapper manufacturerMapper;
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
    FlavorDto getFlavor(@PathVariable("id") String id) {
        return flavorMapper.toFlavorDto(flavorService.get(id));
    }

    @GetMapping("/{id}/comments")
    List<CommentDto> getFlavorComments(@PathVariable("id") String id) {
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

    @GetMapping("/{id}/manufacturer")
    ManufacturerDto getFlavorManufacturer(@PathVariable("id") String id) {
        return manufacturerMapper.toManufacturerDto(manufacturerService.getByFlavor(id));
    }

    @PostMapping
    FlavorDto addFlavor(@RequestBody FlavorDto flavorDto) {
        val flavor = flavorMapper.fromFlavorDto(flavorDto);
        flavor.setManufacturer(manufacturerService.get(flavorDto.getManufacturerId()));
        return flavorMapper.toFlavorDto(flavorService.add(flavor));
    }

    @PostMapping("/{id}")
    FlavorDto updateFlavor(@RequestParam FlavorDto flavorDto) {
        val flavor = flavorMapper.fromFlavorDto(flavorDto);
        flavor.setManufacturer(manufacturerService.get(flavorDto.getManufacturerId()));
        return flavorMapper.toFlavorDto(flavorService.update(flavor));
    }

    @PostMapping("/{id}/comments")
    CommentDto addCommentToFlavor(@PathVariable("id") String id, @RequestBody CommentDto comment) {
        val createdComment = commentService.addToFlavor(id, commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(createdComment);
    }

    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInFlavor(@RequestBody CommentDto comment) {
        val updatedComment = commentService.update(commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(updatedComment);
    }

    @PostMapping("/{id}/likes")
    LikeDto addLikeToFlavor(@PathVariable("id") String id, @RequestBody LikeDto like) {
        val createdLike = likeService.addToFlavor(id, likeMapper.fromLikeDto(like));
        return likeMapper.toLikeDto(createdLike);
    }

    @PostMapping("/{id}/image")
    ImageDto addImageToFlavor(@PathVariable("id") String id, @RequestBody ImageDto image) {
        val createdImage = imageService.addToFlavor(id, imageMapper.fromImageDto(image));
        return imageMapper.toImageDto(createdImage);
    }

    @DeleteMapping("/{id}")
    void deleteFlavor(@PathVariable("id") String id) {
        flavorService.delete(id);
    }

    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromFlavor(@PathVariable("commentId") String commentId) {
        commentService.delete(commentId);
    }

    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromFlavor(@PathVariable("likeId") String likeId) {
        likeService.delete(likeId);
    }

    @DeleteMapping("/{id}/image")
    void deleteImageFromFlavor(@RequestBody ImageDto image) {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
