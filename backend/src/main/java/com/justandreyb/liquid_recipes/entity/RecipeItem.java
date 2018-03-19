package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"flavor"}, callSuper = false)
@ToString(exclude = {"flavor"})
public class RecipeItem extends BaseEntity implements Validatable {

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flavor_id")
    private Flavor flavor;

    @Min(0) @Max(500)
    @Column(name = "ml", nullable = false)
    private double ml;

    @Min(1) @Max(2000)
    @Column(name = "drops", nullable = false)
    private int drops;

}
