package com.justandreyb.liquid_recipes.config;

public enum Roles {

    ANY("any"),
    GUEST("role_anonymous"),
    CLIENT("client"),
    ADMIN("admin");

    Roles(String roleName) {
        this.roleName = roleName;
    }

    String roleName;

    public String getValue() {
        return roleName;
    }
}
