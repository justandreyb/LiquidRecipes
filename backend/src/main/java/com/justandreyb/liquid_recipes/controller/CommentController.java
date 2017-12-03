package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.mapper.CommentMapper;
import com.justandreyb.liquid_recipes.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private CommentMapper commentMapper;

    @GetMapping
    public List<Comment> getComments() {
        return commentService.getAll();
    }

}
