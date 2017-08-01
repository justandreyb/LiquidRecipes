package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "recipe_item")
public class RecipeItem {

    @Id
    private String id;

    @Column(name = "flavor_id", nullable = false)
    private String flavor_id;

    @Column(name = "recipe_id", nullable = false)
    private String recipe_id;

    @Column(name = "amount_ml", nullable = false)
    private double amountMl;

    @Column(name = "amount_drops", nullable = false)
    private int amountDrops;

    public RecipeItem() {
        this.id = UUID.randomUUID().toString();
    }

}
