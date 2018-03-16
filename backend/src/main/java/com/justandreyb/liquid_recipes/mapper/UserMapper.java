package com.justandreyb.liquid_recipes.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.UserDto;
import com.justandreyb.liquid_recipes.entity.User;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        ImageMapper.class,
        RoleMapper.class,
        FlavorMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface UserMapper {

    @Named("toUserDto")
    @Mappings({
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto"),
        @Mapping(target = "flavors", qualifiedByName = "toFlavorsDtos"),
        @Mapping(target = "roles", qualifiedByName = "toRolesDtosWithOnlyName")
    })
    UserDto toUserDto(User user);

    @Named("toUserDtoAsCreator")
    @Mappings({
        @Mapping(target = "flavors", ignore = true),
        @Mapping(target = "password", ignore = true),
        @Mapping(target = "email", ignore = true),
        @Mapping(target = "roles", ignore = true),
        @Mapping(target = "registrationDate", ignore = true),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    UserDto toUserDtoAsCreator(User user);

    @Named("fromUserDto")
    User fromUserDto(UserDto user);

    @Named("toUsersDtos")
    @IterableMapping(qualifiedByName = "toUserDtoAsCreator")
    List<UserDto> toUsersDtos(List<User> users);
}
