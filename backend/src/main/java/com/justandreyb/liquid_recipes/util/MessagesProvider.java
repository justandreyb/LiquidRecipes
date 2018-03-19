package com.justandreyb.liquid_recipes.util;

import javax.annotation.Resource;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource("classpath:messages.properties")
public class MessagesProvider {

    @Resource
    private Environment environment;

    public String getValue(String key) {
        return environment.getProperty(key);
    }
}
