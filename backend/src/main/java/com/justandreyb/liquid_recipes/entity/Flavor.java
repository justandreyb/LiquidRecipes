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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "manufacturer_id", nullable = false)
    private Manufacturer manufacturer;

    @Column(columnDefinition = "varchar")
    @Enumerated(EnumType.STRING)
    private FlavorType type;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "likes_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
            inverseJoinColumns = @JoinColumn(name = "like_id"))
    private Set<Like> likes = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
    @JoinTable(name = "comments_to_flavor", joinColumns = @JoinColumn(name = "flavor_id"),
            inverseJoinColumns = @JoinColumn(name = "comment_id"))
    private Set<Comment> comments = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "image_id")
    private Image image;

    @Override
    public boolean isValid() {
        if (name.isEmpty()) {
            return false;
        }
        if (type == null) {
            return false;
        }
        if (manufacturer == null) {
            return false;
        }
        if (likes == null) {
            return false;
        }
        if (comments == null) {
            return false;
        }
        return true;
    }
}
