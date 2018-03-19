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

import com.justandreyb.liquid_recipes.config.ImageResolutions;
import com.justandreyb.liquid_recipes.config.annotation.CheckRoles;
import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.NewsDto;
import com.justandreyb.liquid_recipes.entity.Comment;

import lombok.val;

import static com.justandreyb.liquid_recipes.config.Roles.ADMIN;
import static com.justandreyb.liquid_recipes.config.Roles.CLIENT;

@RestController
@RequestMapping("/news")
public class NewsController extends ApplicationController {

    @GetMapping
    List<NewsDto> getNews() {
        return newsMapper.toNewsDtos(newsService.getAll());
    }

    @GetMapping("/{id}")
    NewsDto getNews(@PathVariable("id") String id) {
        return newsMapper.toNewsDto(newsService.get(id));
    }

    @CheckRoles(ADMIN)
    @PostMapping
    NewsDto addNews(@RequestBody NewsDto newsDto) {
        val news = newsMapper.fromNewsDto(newsDto);
        news.setImage(imageService.safeGet(newsDto.getImageId(), ImageResolutions.MEDIUM));
        news.setCreator(userService.getCurrentUser());
        return newsMapper.toNewsDto(newsService.add(news));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}")
    NewsDto updateNews(@PathVariable("id") String id, @RequestParam NewsDto newsDto) {
        val news = newsMapper.fromNewsDto(newsDto);
        news.setImage(imageService.safeGet(newsDto.getImageId(), ImageResolutions.MEDIUM));
        news.setCreator(userService.getCurrentUser());
        return newsMapper.toNewsDto(newsService.update(id, news));
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}")
    void deleteNews(@PathVariable("id") String id) {
        newsService.delete(id);
    }

    @GetMapping("/top")
    List<NewsDto> getTop10News() {
        return newsMapper.toNewsDtos(newsService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<NewsDto> getTopNumberNews(@RequestParam int number) {
        return newsMapper.toNewsDtos(newsService.getTop(number));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}/image")
    ImageDto addImageToNews(@PathVariable("id") String id, @RequestBody ImageDto imageDto) {
        val image = imageMapper.fromImageDto(imageDto);
        return imageMapper.toImageDto(imageService.addToNews(id, image));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/likes")
    LikeDto addLikeToNews(@PathVariable("id") String id, @RequestBody LikeDto likeDto) {
        val like = likeMapper.fromLikeDto(likeDto);
        like.setUser(userService.getCurrentUser());
        return likeMapper.toLikeDto(likeService.addToNews(id, like));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/comments")
    CommentDto addCommentToNews(@RequestParam String id, @RequestBody CommentDto commentDto) {
        val comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDto(commentService.addToNews(id, comment));
    }

    @CheckRoles(CLIENT)
    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInNews(@PathVariable("commentId") String id, @RequestBody CommentDto commentDto) {
        checkThatCurrentUserIsCreatorOfEntity(commentDto.getUserId());

        Comment comment = commentMapper.fromCommentDto(commentDto);
        comment.setUser(userService.getCurrentUser());
        return commentMapper.toCommentDto(commentService.addToNews(id, comment));
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromNews(@PathVariable("commentId") String commentId) {
        val comment = commentService.get(commentId);
        checkThatCurrentUserIsCreatorOfEntity(comment.getUser().getId());

        commentService.delete(commentId);
    }

    @CheckRoles({ADMIN, CLIENT})
    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromNews(@PathVariable("likeId") String likeId) {
        val like = likeService.get(likeId);
        checkThatCurrentUserIsCreatorOfEntity(like.getUser().getId());

        likeService.delete(likeId);
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}/image")
    void deleteImageFromNews(@RequestBody ImageDto image) {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
