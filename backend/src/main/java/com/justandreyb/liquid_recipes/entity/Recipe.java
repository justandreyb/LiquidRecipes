package com.justandreyb.liquid_recipes.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"creator", "flavors", "comments", "likes", "image"}, callSuper = false)
@ToString(exclude = {"creator", "flavors", "comments", "likes", "image"})
public class Recipe extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "name", nullable = false)
    private String name;

    @Size(min = 1, max = 512)
    @Column
    private String description;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User creator;

    @NotNull
    @Column
    private Date creationDate = new Date();

    @Min(0) @Max(100)
    @Column
    private byte pg;

    @Min(0) @Max(100)
    @Column
    private byte vg;

    @Min(0) @Max(24)
    @Column
    private byte nicotine;

    @Min(0) @Max(500)
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

}
