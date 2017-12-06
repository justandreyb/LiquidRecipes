package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.CommentDto;
import com.justandreyb.liquid_recipes.dto.ImageDto;
import com.justandreyb.liquid_recipes.dto.LikeDto;
import com.justandreyb.liquid_recipes.dto.NewsDto;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.mapper.CommentMapper;
import com.justandreyb.liquid_recipes.mapper.ImageMapper;
import com.justandreyb.liquid_recipes.mapper.LikeMapper;
import com.justandreyb.liquid_recipes.mapper.NewsMapper;
import com.justandreyb.liquid_recipes.service.CommentService;
import com.justandreyb.liquid_recipes.service.ImageService;
import com.justandreyb.liquid_recipes.service.LikeService;
import com.justandreyb.liquid_recipes.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/news")
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
    void addNews(@RequestBody NewsDto newsDto) {
        newsService.add(newsMapper.fromNewsDto(newsDto));
    }

    @PostMapping("/{id}")
    void updateNews(@RequestParam NewsDto newsDto) {
        newsService.update(newsMapper.fromNewsDto(newsDto));
    }

    @PostMapping("/{id}/comments")
    void addCommentToNews(@RequestParam String id, @RequestBody CommentDto comment) {
        commentService.addToNews(id, commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/comments/{commentId}")
    void updateCommentInNews(@RequestBody CommentDto comment) {
        commentService.update(commentMapper.fromCommentDto(comment));
    }

    @PostMapping("/{id}/likes")
    void addLikeToNews(@PathVariable("id") String id, @RequestBody LikeDto like) {
        likeService.addToNews(id, likeMapper.fromLikeDto(like));
    }

    @PostMapping("/{id}/image")
    void addLikeToNews(@PathVariable("id") String id, @RequestBody ImageDto image) {
        imageService.addToNews(id, imageMapper.fromImageDto(image));
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
