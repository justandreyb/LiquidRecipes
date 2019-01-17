package com.justandreyb.liquid_recipes.dto;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@EqualsAndHashCode(callSuper = false)
public class NewsDto extends DTO {

    private String title;

    private String text;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date creationDate;

    private ImageDto image;
    private String imageId;

    private List<CommentDto> comments;
    private List<String> commentsIds;

    private List<LikeDto> likes;
    private List<String> likesIds;

    private UserDto creator;
    private String creatorId;
}
