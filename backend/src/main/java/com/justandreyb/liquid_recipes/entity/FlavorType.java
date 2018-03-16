package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "flavor_type")
@EqualsAndHashCode(callSuper = false)
public class FlavorType extends BaseEntity {

    @Column(name = "name")
    private String name;

    @Override
    public boolean isValid() {
        return !name.isEmpty();
    }
}
