package com.justandreyb.liquid_recipes.service;

import org.springframework.stereotype.Service;

import com.justandreyb.liquid_recipes.entity.News;
import com.justandreyb.liquid_recipes.repository.NewsRepository;

@Service
public class NewsService extends EntityService<News, NewsRepository> {

    public Iterable<News> getTop(int number) {
        return getAllByRange(0, number);
    }
}
