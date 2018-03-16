package com.justandreyb.liquid_recipes.mapper;

import java.util.Collection;
import java.util.List;

import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Named;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.entity.Manufacturer;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        CountryMapper.class,
        ImageMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface ManufacturerMapper {

    @Named("toManufacturerDto")
    @Mappings({
        @Mapping(target = "logo", qualifiedByName = "toImageDto"),
        @Mapping(target = "logoId", ignore = true),
        @Mapping(target = "country", qualifiedByName = "toCountryDtoWithCode"),
        @Mapping(target = "countryId", ignore = true)
    })
    ManufacturerDto toManufacturerDto(Manufacturer manufacturer);

    @Named("toManufacturerDtoOnlyWithLogo")
    @Mappings({
        @Mapping(target = "logo", qualifiedByName = "toImageDto"),
        @Mapping(target = "logoId", ignore = true),
        @Mapping(target = "country", ignore = true),
        @Mapping(target = "countryId", ignore = true),
        @Mapping(target = "description", ignore = true)
    })
    ManufacturerDto toManufacturerDtoOnlyWithLogo(Manufacturer manufacturer);

    @Named("fromManufacturerDto")
    Manufacturer fromManufacturerDto(ManufacturerDto manufacturerDto);

    @Named("toManufacturersDtos")
    @IterableMapping(qualifiedByName = "toManufacturerDtoOnlyWithLogo")
    List<ManufacturerDto> toManufacturersDtos(Iterable<Manufacturer> manufacturers);
}
