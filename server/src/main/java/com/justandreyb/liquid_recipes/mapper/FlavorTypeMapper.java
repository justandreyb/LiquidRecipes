package com.justandreyb.liquid_recipes.mapper;

import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.FlavorTypeDto;
import com.justandreyb.liquid_recipes.entity.FlavorType;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface FlavorTypeMapper {

    @Named("toFlavorTypeDto")
    FlavorTypeDto toFlavorTypeDto(FlavorType role);

    @Named("toFlavorTypeDtoWithOnlyName")
    @Mapping(target = "id", ignore = true)
    FlavorTypeDto toFlavorTypeDtoWithOnlyName(FlavorType role);

    @Named("toFlavorTypesDtos")
    @IterableMapping(qualifiedByName = "toFlavorTypeDto")
    List<FlavorTypeDto> toFlavorTypeDtos(Iterable<FlavorType> flavorTypes);

    @Named("toFlavorTypesDtosWithOnlyName")
    @IterableMapping(qualifiedByName = "toFlavorTypeDtoWithOnlyName")
    List<FlavorTypeDto> toFlavorTypesDtosWithOnlyName(Iterable<FlavorType> flavorTypes);

}
