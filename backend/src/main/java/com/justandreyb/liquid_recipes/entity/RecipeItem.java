package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(exclude = {"flavor"}, callSuper = false)
@ToString(exclude = {"flavor"})
public class RecipeItem extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flavor_id")
    private Flavor flavor;

    @Column(name = "ml", nullable = false)
    private double ml;

    @Column(name = "drops", nullable = false)
    private int drops;
}
