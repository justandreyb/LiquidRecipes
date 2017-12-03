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
public class UserDto extends DTO {

    private String name;

    private String email;

    private String password;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date registrationDate;

    private ImageDto image;

}
