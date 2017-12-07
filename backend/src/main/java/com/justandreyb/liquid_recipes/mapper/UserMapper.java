package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.User;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {ImageMapper.class}
)
public interface UserMapper {

    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "image", ignore = true)
    })
    @Named("toUserDto")
    UserDto toUserDto(User user);

    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    @Named("toFullUserDto")
    UserDto toFullUserDto(User user);

    @Named("fromUserDto")
    User fromUserDto(UserDto user);
}
