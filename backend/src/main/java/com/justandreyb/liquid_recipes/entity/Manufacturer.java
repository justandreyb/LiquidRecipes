package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@Entity
@EqualsAndHashCode(exclude = {"logo", "country"}, callSuper = false)
@ToString(exclude = {"logo", "country"})
public class Manufacturer extends BaseEntity {
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

    @Override
    public boolean isValid() {
        if (name.isEmpty()) {
            return false;
        }
        if (country == null) {
            return false;
        }
        return true;
    }
}
