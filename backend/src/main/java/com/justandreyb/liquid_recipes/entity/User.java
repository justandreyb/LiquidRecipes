package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"image", "manufacturer"}, callSuper = false)
@ToString(exclude = {"image", "manufacturer"})
public class User extends Entity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

}
