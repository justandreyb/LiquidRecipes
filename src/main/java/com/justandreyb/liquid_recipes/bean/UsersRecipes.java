package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "users_recipes")
public class UsersRecipes {

    @Id
    private String id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "recipe_id", nullable = false)
    private String recipeId;

    public UsersRecipes() {
        this.id = UUID.randomUUID().toString();
    }
}
