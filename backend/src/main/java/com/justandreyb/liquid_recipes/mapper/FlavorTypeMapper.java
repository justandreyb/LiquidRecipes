package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.FlavorTypeDto;
import com.justandreyb.liquid_recipes.dto.RoleDto;
import com.justandreyb.liquid_recipes.entity.FlavorType;
import com.justandreyb.liquid_recipes.entity.Role;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring"
)
public interface FlavorTypeMapper {

    @Named("toFlavorTypeDto")
    @Mapping(target = "id", ignore = true)
    FlavorTypeDto toFlavorTypeDto(FlavorType role);

    @Named("toFullFlavorTypeDto")
    FlavorTypeDto toFullFlavorTypeDto(FlavorType role);

    @Named("toFlavorTypeDtos")
    @IterableMapping(qualifiedByName = "toFlavorTypeDto")
    List<FlavorTypeDto> toFlavorTypeDtos(Collection<FlavorType> flavorTypes);

    @Named("toFlavorTypeDtos")
    @IterableMapping(qualifiedByName = "toFullFlavorTypeDto")
    List<FlavorTypeDto> toFullFlavorTypeDtos(Collection<FlavorType> flavorTypes);
}
