package com.justandreyb.liquid_recipes.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;

@Configuration
public class PasswordEncoderConf {

    @Value("${sha.length}")
    private int shaLength;

    @Bean
    protected ShaPasswordEncoder passwordEncoder() {
        return new ShaPasswordEncoder(shaLength);
    }

}
