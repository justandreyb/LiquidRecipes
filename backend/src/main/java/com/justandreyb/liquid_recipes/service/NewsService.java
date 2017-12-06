package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.News;
import com.justandreyb.liquid_recipes.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class NewsService extends EntityService<News, NewsRepository> {

    public Collection<News> getTop(int number) {
        return getAllByRange(0, number);
    }
}
