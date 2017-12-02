package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"creator", "flavors", "image"}, callSuper = false)
@ToString(exclude = {"creator", "flavors", "image"})
public class Recipe extends Entity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User creator;

    @Column
    private Date creationDate = new Date();

    @Column
    private byte pg;

    @Column
    private byte vg;

    @Column
    private byte nicotine;

    @Column(nullable = false)
    private double finalAmount;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "comments_to_news", joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_item_id"))
    private Set<RecipeItem> flavors = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;
}
