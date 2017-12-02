package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"image", "manufacturer"}, callSuper = false)
@ToString(exclude = {"image", "manufacturer"})
public class Flavor extends Entity {

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

}
