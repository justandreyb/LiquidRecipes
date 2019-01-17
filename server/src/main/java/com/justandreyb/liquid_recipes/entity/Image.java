package com.justandreyb.liquid_recipes.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Image extends BaseEntity implements Validatable {

    @NotNull
    @Column(nullable = false)
    private String path;

    @NotNull
    @Column(nullable = false)
    private Date creationDate = new Date();
}
