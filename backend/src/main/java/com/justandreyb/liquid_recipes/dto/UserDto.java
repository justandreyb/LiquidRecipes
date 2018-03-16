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
public class UserDto extends DTO {

    private String name;

    private String email;

    private String password;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date registrationDate;

    private String imageId;
    private ImageDto image;

    private List<RoleDto> roles;

    private List<FlavorDto> flavors;
}
