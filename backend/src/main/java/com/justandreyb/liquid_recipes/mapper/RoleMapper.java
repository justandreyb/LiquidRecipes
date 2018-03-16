package com.justandreyb.liquid_recipes.mapper;

import java.util.Collection;
import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.entity.Role;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface RoleMapper {

    @Named("toRoleDto")
    RoleDto toRoleDto(Role role);

    @Named("toRoleDtoWithOnlyName")
    @Mapping(target = "id", ignore = true)
    RoleDto toRoleDtoWithOnlyName(Role role);

    @Named("toRolesDtos")
    @IterableMapping(qualifiedByName = "toRoleDto")
    List<RoleDto> toRolesDtos(Iterable<Role> roles);

    @Named("toRolesDtosWithOnlyName")
    @IterableMapping(qualifiedByName = "toRoleDtoWithOnlyName")
    List<RoleDto> toRolesDtosWithOnlyName(Iterable<Role> roles);

}
