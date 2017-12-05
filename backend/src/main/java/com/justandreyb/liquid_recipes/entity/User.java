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
@EqualsAndHashCode(exclude = {"image", "flavors"}, callSuper = false)
@ToString(exclude = {"image", "flavors"})
public class User extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column
    private Date registrationDate = new Date();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "flavors_to_users", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "flavor_id"))
    private Set<Flavor> flavors = new HashSet<>();

    @Override
    public boolean isValid() {
        return false;
    }
}
