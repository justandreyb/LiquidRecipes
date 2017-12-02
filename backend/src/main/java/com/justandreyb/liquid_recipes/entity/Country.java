package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;

@EqualsAndHashCode(callSuper = true)
@Data
@javax.persistence.Entity
public class Country extends Entity {

    @Column
    private String name;

    @Column
    private String code;
}
