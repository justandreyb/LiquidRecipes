package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, String> {
}
