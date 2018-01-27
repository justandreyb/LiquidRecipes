package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.entity.Role;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper(
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
        componentModel = "spring"
)
public interface RoleMapper {

    @Named("toRoleDto")
    @Mapping(target = "id", ignore = true)
    RoleDto toRoleDto(Role role);

    @Named("toFullRoleDto")
    RoleDto toFullRoleDto(Role role);

    @Named("toLikeDtos")
    @IterableMapping(qualifiedByName = "toRoleDto")
    List<RoleDto> toRoleDtos(List<Role> roles);
}
