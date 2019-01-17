package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"logo", "country"}, callSuper = false)
@ToString(exclude = {"logo", "country"})
public class Manufacturer extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 50)
    @Column(nullable = false)
    private String name;

    @Size(min = 1, max = 512)
    @Column
    private String description;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id")
    private Country country;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image logo;

}
