package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@Table(name = "role")
@EqualsAndHashCode(callSuper = true)
public class Role extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "name")
    private String name;

}