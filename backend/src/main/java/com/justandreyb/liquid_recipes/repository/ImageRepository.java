package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Image;

public interface ImageRepository extends JpaRepository<Image, String> {

    Image findByPathContains(String resolution);

}
