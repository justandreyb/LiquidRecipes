package com.justandreyb.liquid_recipes.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

import javax.annotation.Resource;

@Configuration
@PropertySource("classpath:messages.properties")
public class ResourcesConfig {

    @Resource
    private Environment environment;

    public String getValue(String key) {
        return environment.getProperty(key);
    }
}
