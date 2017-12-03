package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Comment;
import com.justandreyb.liquid_recipes.repository.CommentRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentService extends EntityService<Comment, CommentRepository> {
}
