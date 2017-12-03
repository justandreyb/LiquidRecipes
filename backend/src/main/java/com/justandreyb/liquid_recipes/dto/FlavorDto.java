package com.justandreyb.liquid_recipes.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.justandreyb.liquid_recipes.entity.FlavorType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FlavorDto extends DTO {

    private String name;

    private String description;

    private ManufacturerDto manufacturer;

    private FlavorType type;

    private List<LikeDto> likes;

    private List<CommentDto> comments;

    private ImageDto image;

}
