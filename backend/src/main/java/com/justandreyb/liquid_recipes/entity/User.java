package com.justandreyb.liquid_recipes.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"image", "flavors"}, callSuper = false)
@ToString(exclude = {"image", "flavors", "roles"})
public class User extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 128)
    @Column(nullable = false)
    private String name;

    @NotNull
    @Size(min = 1, max = 256)
    @Column(nullable = false)
    private String email;

    @NotNull
    @Size(min = 8)
    @Column(nullable = false)
    private String password;

    @NotNull
    @Column
    private Date registrationDate = new Date();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "flavors_to_users", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "flavor_id"))
    private Set<Flavor> flavors = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "roles_to_users", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

}
