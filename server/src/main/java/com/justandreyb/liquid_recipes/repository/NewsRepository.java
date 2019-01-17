package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.News;

public interface NewsRepository extends JpaRepository<News, String> {
}
