package com.justandreyb.liquid_recipes.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

import com.justandreyb.liquid_recipes.entity.FlavorType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@EqualsAndHashCode(callSuper = false)
public class FlavorDto extends DTO {

    private String name;

    private String description;

    private ManufacturerDto manufacturer;
    private String manufacturerId;

    private FlavorType flavorType;
    private String flavorTypeId;

    private List<CommentDto> comments;
    private List<String> commentsIds;

    private List<LikeDto> likes;
    private List<String> likesIds;

    private ImageDto image;
    private String imageId;

}
