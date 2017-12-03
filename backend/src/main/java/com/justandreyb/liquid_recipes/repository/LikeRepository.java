package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, String> {
}
