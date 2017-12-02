package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"flavor"}, callSuper = false)
@ToString(exclude = {"flavor"})
public class RecipeItem extends Entity{
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flavor_id")
    private Flavor flavor;

    @Column(name = "ml", nullable = false)
    private double ml;

    @Column(name = "drops", nullable = false)
    private int drops;
}
