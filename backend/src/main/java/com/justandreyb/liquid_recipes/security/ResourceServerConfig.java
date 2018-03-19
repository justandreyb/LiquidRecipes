package com.justandreyb.liquid_recipes.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;

import com.justandreyb.liquid_recipes.config.Paths;
import com.justandreyb.liquid_recipes.config.Roles;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Autowired
    private ResourceServerTokenServices serverTokenServices;

    @Value("${security.resource-servers.liquid-recipes.id}")
    private String liquidRecipesResourceId;

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources
            .resourceId(liquidRecipesResourceId)
            .tokenServices(serverTokenServices);
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers(Paths.getByRole(Roles.ANY)).permitAll()
                .antMatchers(Paths.getByRole(Roles.GUEST)).permitAll()
            .anyRequest()
                .authenticated();
    }
}
