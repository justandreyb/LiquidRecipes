package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "flavor_type")
@EqualsAndHashCode(callSuper = true)
public class FlavorType extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Override
    public boolean isValid() {
        return !name.isEmpty();
    }
}
