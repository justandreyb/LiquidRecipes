package com.justandreyb.liquid_recipes.config.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.justandreyb.liquid_recipes.config.Roles;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface CheckRoles {
    String message() default "You don't have enough permissions to perform this action";

    Roles[] value() default Roles.ANY;
}
