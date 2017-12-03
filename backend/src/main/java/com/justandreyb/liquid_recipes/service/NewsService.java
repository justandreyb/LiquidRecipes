package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.News;
import com.justandreyb.liquid_recipes.repository.NewsRepository;
import org.springframework.stereotype.Service;

@Service
public class NewsService extends EntityService<News, NewsRepository> {
}
