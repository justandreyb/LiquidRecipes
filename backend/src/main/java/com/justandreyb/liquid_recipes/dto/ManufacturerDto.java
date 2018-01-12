package com.justandreyb.liquid_recipes.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ManufacturerDto extends DTO {

    private String name;

    private String description;

    private CountryDto country;
    private String countryId;

    private ImageDto logo;
    private String logoId;
}
