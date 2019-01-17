package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String> {
}
