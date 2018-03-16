package com.justandreyb.liquid_recipes.dto;

import java.util.Date;

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
public class CommentDto extends DTO {

    private String text;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;

    private UserDto user;
    private String userId;
}
