package com.justandreyb.liquid_recipes.mapper;

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.entity.Country;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;

@Component
@Mapper(
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS,
    componentModel = "spring",
    uses = {ImageMapper.class}
)
public interface CountryMapper {

    @Named("toCountryDto")
    @Mapping(target = "image", ignore = true)
    CountryDto toCountryDto(Country country);

    @Named("toFullCountryDto")
    @Mapping(target = "image", qualifiedByName = "toImageDto")
    CountryDto toFullCountryDto(Country country);

    @Named("fromCountryDto")
    Country fromCountryDto(CountryDto countryDto);

    @Named("toCountryDtos")
    @IterableMapping(qualifiedByName = "toCountryDto")
    List<CountryDto> toCountryDtos(Collection<Country> countries);

    @Named("toFullCountryDtos")
    @IterableMapping(qualifiedByName = "toFullCountryDto")
    List<CountryDto> toFullCountryDtos(Collection<Country> countries);

    @Named("fromCountryDtos")
    @IterableMapping(qualifiedByName = "fromCountryDto")
    List<Country> fromCountryDtos(Collection<CountryDto> countryDtos);

}
