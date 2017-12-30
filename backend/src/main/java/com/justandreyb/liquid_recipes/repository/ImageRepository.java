package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ImageRepository extends JpaRepository<Image, String> {
}
