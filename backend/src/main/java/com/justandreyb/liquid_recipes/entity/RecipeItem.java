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

    @Override
    public boolean isValid() {
        if (flavor == null) {
            return false;
        }
        return true;
    }
}
