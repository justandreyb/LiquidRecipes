package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "recipe_creator")
public class RecipeCreator {

    @Id
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "logo_href")
    private String logoHref;

    public RecipeCreator() {
        this.id = UUID.randomUUID().toString();
    }

}
