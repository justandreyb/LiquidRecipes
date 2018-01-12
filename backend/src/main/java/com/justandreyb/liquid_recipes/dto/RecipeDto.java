package com.justandreyb.liquid_recipes.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RecipeDto extends DTO {

    private String name;

    private String description;

    private UserDto creator;
    private String creatorId;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date creationDate;

    private byte pg;

    private byte vg;

    private byte nicotine;

    private double finalAmount;

    private List<RecipeItemDto> flavors;
    private List<String> flavorsIds;

    private List<CommentDto> comments;
    private List<String> commentsIds;

    private List<LikeDto> likes;
    private List<String> likesIds;

    private ImageDto image;
    private String imageId;
}
