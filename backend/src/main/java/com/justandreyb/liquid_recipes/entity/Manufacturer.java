package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"logo", "country"}, callSuper = false)
@ToString(exclude = {"logo", "country"})
public class Manufacturer extends Entity {
    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    private Country country;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image logo;
}
