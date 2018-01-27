package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.User;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {ImageMapper.class, RoleMapper.class}
)
public interface UserMapper {

    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "image", ignore = true),
        @Mapping(target = "roles", ignore = true)
    })
    @Named("toUserDto")
    UserDto toUserDto(User user);

    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "roles", qualifiedByName = "toRoleDto")
    })
    @Named("toUserInfoDto")
    UserDto toUserInfoDto(User user);

    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    @Named("toFullUserDto")
    UserDto toFullUserDto(User user);

    @Named("fromUserDto")
    @Mapping(target = "roles", ignore = true)
    User fromUserDto(UserDto user);
}
