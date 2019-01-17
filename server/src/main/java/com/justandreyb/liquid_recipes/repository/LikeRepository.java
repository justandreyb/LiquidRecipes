package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Like;

public interface LikeRepository extends JpaRepository<Like, String> {
}
