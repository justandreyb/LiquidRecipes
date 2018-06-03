package com.justandreyb.liquid_recipes.security;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Value("${security.resource-servers.liquid-recipes.id}")
    private String liquidRecipesResourceId;

    @Value("${security.clients.react-app.id}")
    private String reactAppId;

    @Value("${security.clients.react-app.grant-types}")
    private String[] reactAppGrantTypes;
    @Value("${security.clients.react-app.secret}")
    private String reactAppSecret;
    @Value("${security.clients.react-app.scopes}")
    private String[] reactAppScopes;
    @Value("${security.clients.react-app.token-action-time}")
    private int reactAppTokenActionTime;

    @Autowired
    private TokenStore tokenStore;

    @Autowired
    private JwtAccessTokenConverter accessTokenConverter;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security
            .tokenKeyAccess("permitAll()")
            .checkTokenAccess("isAuthenticated()");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients
            .inMemory()
            .withClient(reactAppId)
                .secret(reactAppSecret)
                .scopes(reactAppScopes)
                .resourceIds(liquidRecipesResourceId)
                .authorizedGrantTypes(reactAppGrantTypes)
                .accessTokenValiditySeconds(reactAppTokenActionTime)
        ;
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();
        enhancerChain.setTokenEnhancers(Collections.singletonList(accessTokenConverter));
        endpoints
            .tokenStore(tokenStore)
            .accessTokenConverter(accessTokenConverter)
            .tokenEnhancer(enhancerChain)
            .authenticationManager(authenticationManager);
    }
}
