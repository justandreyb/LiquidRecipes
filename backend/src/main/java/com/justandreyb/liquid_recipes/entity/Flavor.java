package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@EqualsAndHashCode(exclude = {"image", "manufacturer", "likes", "comments"}, callSuper = false)
@ToString(exclude = {"image", "manufacturer", "likes", "comments"})
public class Flavor extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manufacturer_id", nullable = false)
    private Manufacturer manufacturer;

    @Column(columnDefinition = "varchar")
    @Enumerated(EnumType.STRING)
    private FlavorType type;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "likes_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
            inverseJoinColumns = @JoinColumn(name = "like_id"))
    private Set<Like> likes = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "comments_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
            inverseJoinColumns = @JoinColumn(name = "comment_id"))
    private Set<Comment> comments = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

    @Override
    public boolean isValid() {
        return false;
    }
}
