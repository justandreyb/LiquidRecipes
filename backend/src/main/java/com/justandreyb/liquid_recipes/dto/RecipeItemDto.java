package com.justandreyb.liquid_recipes.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecipeItemDto extends DTO {

    private FlavorDto flavor;

    private double ml;

    private int drops;
}
