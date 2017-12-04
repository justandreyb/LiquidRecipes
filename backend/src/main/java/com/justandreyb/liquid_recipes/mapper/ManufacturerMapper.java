package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.entity.Manufacturer;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {CountryMapper.class, ImageMapper.class}
)
public interface ManufacturerMapper {

    @Named("toManufacturerDto")
    @Mappings({
        @Mapping(target = "logo", qualifiedByName = "toImageDto"),
        @Mapping(target = "country", ignore = true),
        @Mapping(target = "description", ignore = true)
    })
    ManufacturerDto toManufacturerDto(Manufacturer manufacturer);

    @Named("toFullManufacturerDto")
    @Mappings({
        @Mapping(target = "logo", qualifiedByName = "toImageDto"),
        @Mapping(target = "country", qualifiedByName = "toCountryDto")
    })
    ManufacturerDto toFullManufacturerDto(Manufacturer manufacturer);

    @Named("fromManufacturerDto")
    Manufacturer fromManufacturerDto(ManufacturerDto manufacturerDto);

    @Named("toManufacturerDtos")
    @IterableMapping(qualifiedByName = "toManufacturerDto")
    List<ManufacturerDto> toManufacturerDtos(Collection<Manufacturer> manufacturers);

    @Named("toFullManufacturerDtos")
    @IterableMapping(qualifiedByName = "toFullManufacturerDto")
    List<ManufacturerDto> toFullManufacturerDtos(Collection<Manufacturer> manufacturers);

    @Named("fromManufacturerDtos")
    @IterableMapping(qualifiedByName = "fromManufacturerDto")
    List<Manufacturer> fromManufacturerDtos(Collection<ManufacturerDto> manufacturerDtos);
}
