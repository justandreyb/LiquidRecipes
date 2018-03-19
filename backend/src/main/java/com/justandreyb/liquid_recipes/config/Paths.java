package com.justandreyb.liquid_recipes.config;

import java.util.Arrays;
import java.util.List;

import static com.justandreyb.liquid_recipes.config.Roles.*;

public enum Paths {

    ROOT("/", ANY),
    HOME("/home", ANY),

    CSS("/css/**", ANY),
    IMAGES("/images/**", ANY),

    TOKEN("/oauth/token", ANY),

    LOGIN("/accounts/login/**", GUEST),
    REGISTRATION("/accounts/registration/**", GUEST, ADMIN),
    LOGOUT("/accounts/logout/**", CLIENT, ADMIN),
    IM("/accounts/im/**", CLIENT, ADMIN),

    NEWS("/news/**", CLIENT, ADMIN),
    FLAVORS("/flavors/**", CLIENT, ADMIN),
    RECIPES("/recipes/**", CLIENT, ADMIN),

    DASHBOARD("/dashboard/**", ADMIN);

    private String pageName;
    private List<Roles> roles;

    Paths(String pageName, Roles...roles) {
        this.pageName = pageName;
        this.roles = Arrays.asList(roles);
    }

    public String getValue() {
        return pageName;
    }

    public boolean isRoleAllow(Roles role) {
        return this.roles.contains(role);
    }

    public static String[] getByRole(Roles role) {
        return Arrays
                .stream(Paths.values())
                .filter(page -> page.isRoleAllow(role))
                .map(Paths::getValue).toArray(String[]::new);
    }
}
