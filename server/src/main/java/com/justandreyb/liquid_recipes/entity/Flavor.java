package com.justandreyb.liquid_recipes.entity;

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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"image", "manufacturer", "likes", "comments"}, callSuper = false)
@ToString(exclude = {"image", "manufacturer", "likes", "comments"})
public class Flavor extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 50)
    @Column(nullable = false)
    private String name;

    @Column
    @Size(min = 1, max = 512)
    private String description;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manufacturer_id", nullable = false)
    private Manufacturer manufacturer;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "type_id", nullable = false)
    private FlavorType flavorType;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "likes_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
        inverseJoinColumns = @JoinColumn(name = "like_id"))
    private Set<Like> likes = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "comments_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
        inverseJoinColumns = @JoinColumn(name = "comment_id"))
    private Set<Comment> comments = new HashSet<>();

    @NotNull
    @ManyToOne
    @JoinColumn(name = "image_id")
    private Image image;

}
