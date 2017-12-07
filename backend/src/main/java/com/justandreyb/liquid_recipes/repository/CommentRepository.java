package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, String> {
}
