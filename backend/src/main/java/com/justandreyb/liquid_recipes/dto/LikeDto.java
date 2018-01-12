package com.justandreyb.liquid_recipes.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LikeDto extends DTO {

    private UserDto user;
    private String userId;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date creationDate;
}
