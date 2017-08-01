package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "recipe")
public class Recipe {

    @Id
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "creator_id", nullable = false)
    private String creatorId;

    @Column(name = "pg")
    private byte pg;

    @Column(name = "vg")
    private byte vg;

    @Column(name = "nicotine")
    private byte nicotine;

    @Column(name = "final_amount", nullable = false)
    private double finalAmount;

    @Column(name = "image_href")
    private String imageHref;

    public Recipe() {
        this.id = UUID.randomUUID().toString();
    }

}
