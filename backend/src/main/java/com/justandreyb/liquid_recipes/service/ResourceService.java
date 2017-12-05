package com.justandreyb.liquid_recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
@PropertySource("classpath:messages.properties")
public class ResourceService {

    @Autowired
    private Environment environment;

    public String getValue(String key) {
        return environment.getProperty(key);
    }
}
