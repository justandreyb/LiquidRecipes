package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.NewsDto;
import com.justandreyb.liquid_recipes.mapper.CommentMapper;
import com.justandreyb.liquid_recipes.mapper.ImageMapper;
import com.justandreyb.liquid_recipes.mapper.LikeMapper;
import com.justandreyb.liquid_recipes.mapper.NewsMapper;
import com.justandreyb.liquid_recipes.service.CommentService;
import com.justandreyb.liquid_recipes.service.ImageService;
import com.justandreyb.liquid_recipes.service.LikeService;
import com.justandreyb.liquid_recipes.service.NewsService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/news")
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {

    @Autowired
    private NewsService newsService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private LikeService likeService;
    @Autowired
    private ImageService imageService;

    @Autowired
    private NewsMapper newsMapper;
    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private LikeMapper likeMapper;
    @Autowired
    private ImageMapper imageMapper;

    @GetMapping
    List<NewsDto> getAllNews() {
        return newsMapper.toNewsDtos(newsService.getAll());
    }

    @GetMapping("/top")
    List<NewsDto> getTop10News() {
        return newsMapper.toNewsDtos(newsService.getTop(10));
    }

    @GetMapping("/top/{number}")
    List<NewsDto> getTopNumberNews(@RequestParam int number) {
        return newsMapper.toNewsDtos(newsService.getTop(number));
    }

    @GetMapping("/{id}")
    NewsDto getNews(@PathVariable("id") String id) {
        return newsMapper.toNewsDto(newsService.get(id));
    }

    @GetMapping("/{id}/comments")
    List<CommentDto> getNewsComments(@PathVariable("id") String id) {
        return commentMapper.toCommentDtos(commentService.getAllByNews(id));
    }

    @GetMapping("/{id}/likes")
    List<LikeDto> getNewsLikes(@PathVariable("id") String id) {
        return likeMapper.toLikeDtos(likeService.getAllByNews(id));
    }

    @GetMapping("/{id}/image")
    ImageDto getNewsImage(@PathVariable("id") String id) {
        return imageMapper.toImageDto(imageService.getByNews(id));
    }

    @PostMapping
    NewsDto addNews(@RequestBody NewsDto newsDto) {
        val news = newsService.add(newsMapper.fromNewsDto(newsDto));
        return newsMapper.toNewsDto(news);
    }

    @PostMapping("/{id}")
    NewsDto updateNews(@RequestParam NewsDto newsDto) {
        val news = newsService.update(newsMapper.fromNewsDto(newsDto));
        return newsMapper.toNewsDto(news);
    }

    @PostMapping("/{id}/comments")
    CommentDto addCommentToNews(@RequestParam String id, @RequestBody CommentDto comment) {
        val createdComment = commentService.addToNews(id, commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(createdComment);
    }

    @PostMapping("/{id}/comments/{commentId}")
    CommentDto updateCommentInNews(@RequestBody CommentDto comment) {
        val updatedComment = commentService.update(commentMapper.fromCommentDto(comment));
        return commentMapper.toCommentDto(updatedComment);
    }

    @PostMapping("/{id}/likes")
    LikeDto addLikeToNews(@PathVariable("id") String id, @RequestBody LikeDto like) {
        val createdLike = likeService.addToNews(id, likeMapper.fromLikeDto(like));
        return likeMapper.toLikeDto(createdLike);
    }

    @PostMapping("/{id}/image")
    ImageDto addImageToNews(@PathVariable("id") String id, @RequestBody ImageDto image) {
        val createdImage = imageService.addToNews(id, imageMapper.fromImageDto(image));
        return imageMapper.toImageDto(createdImage);
    }

    @DeleteMapping("/{id}")
    void deleteNews(@PathVariable("id") String id) {
        newsService.delete(id);
    }

    @DeleteMapping("/{id}/comments/{commentId}")
    void deleteCommentFromNews(@PathVariable("commentId") String commentId) {
        commentService.delete(commentId);
    }

    @DeleteMapping("/{id}/likes/{likeId}")
    void deleteLikeFromNews(@PathVariable("likeId") String likeId) {
        likeService.delete(likeId);
    }

    @DeleteMapping("/{id}/image")
    void deleteImageFromNews(@RequestBody ImageDto image) {
        imageService.delete(imageMapper.fromImageDto(image));
    }

}
