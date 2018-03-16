package com.justandreyb.liquid_recipes.config.paths;

import java.util.Arrays;
import java.util.List;

import com.justandreyb.liquid_recipes.config.role.Role;

import static com.justandreyb.liquid_recipes.config.role.Role.*;

public enum Paths {

    ROOT("/", ANY),
    HOME("/home", ANY),

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
    private List<Role> roles;

    Paths(String pageName, Role ...roles) {
        this.pageName = pageName;
        this.roles = Arrays.asList(roles);
    }

    public String getValue() {
        return pageName;
    }

    public boolean isRoleAllow(Role role) {
        return this.roles.contains(role);
    }

    public static String[] getByRole(Role role) {
        return Arrays
                .stream(Paths.values())
                .filter(page -> page.isRoleAllow(role))
                .map(Paths::getValue).toArray(String[]::new);
    }
}
