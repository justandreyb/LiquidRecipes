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

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.entity.Country;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {
        ImageMapper.class
    },
    unmappedTargetPolicy = ReportingPolicy.ERROR
)
public interface CountryMapper {

    @Named("toCountryDtoWithCode")
    @Mappings({
        @Mapping(target = "name", ignore = true),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    CountryDto toCountryDtoWithCode(Country country);

    @Named("toCountryDtoWithName")
    @Mappings({
        @Mapping(target = "code", ignore = true),
        @Mapping(target = "imageId", ignore = true),
        @Mapping(target = "image", qualifiedByName = "toImageDto")
    })
    CountryDto toCountryDtoWithName(Country country);

    @Named("fromCountryDto")
    Country fromCountryDto(CountryDto countryDto);

    @Named("toCountriesDtosWithName")
    @IterableMapping(qualifiedByName = "toCountryDtoWithName")
    List<CountryDto> toCountriesDtosWithName(Iterable<Country> countries);

}
