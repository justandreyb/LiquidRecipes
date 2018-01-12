package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@EqualsAndHashCode(exclude = {"creator", "flavors", "comments", "likes", "image"}, callSuper = false)
@ToString(exclude = {"creator", "flavors", "comments", "likes", "image"})
public class Recipe extends BaseEntity {
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

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "items_to_recipe", joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_item_id"))
    private Set<RecipeItem> flavors = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "comments_to_recipe", joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "comment_id"))
    private Set<Comment> comments = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "likes_to_recipe", joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "like_id"))
    private Set<Like> likes = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "image_id")
    private Image image;

    @Override
    public boolean isValid() {
        if (name.isEmpty()) {
            return false;
        }
        if (creator == null) {
            return false;
        }
        return true;
    }
}
