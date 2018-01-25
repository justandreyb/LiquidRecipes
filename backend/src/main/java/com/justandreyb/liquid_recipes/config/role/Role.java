package com.justandreyb.liquid_recipes.config.role;

public enum Role {

    ANY("any"),
    GUEST("guest"),
    CLIENT("client"),
    ADMIN("admin");

    Role(String roleName) {
        this.roleName = roleName;
    }

    String roleName;

    public String getValue() {
        return roleName;
    }
}
