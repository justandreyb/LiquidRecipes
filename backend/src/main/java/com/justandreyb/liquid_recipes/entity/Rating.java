package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"image", "manufacturer"}, callSuper = false)
@ToString(exclude = {"image", "manufacturer"})
public class Rating extends Entity {
}
