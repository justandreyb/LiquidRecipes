package com.justandreyb.liquid_recipes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.val;

import com.justandreyb.liquid_recipes.config.ImageResolutions;
import com.justandreyb.liquid_recipes.config.annotation.CheckRoles;
import com.justandreyb.liquid_recipes.dto.CountryDto;

import static com.justandreyb.liquid_recipes.config.Roles.ADMIN;

@RestController
@RequestMapping("/countries")
public class CountryController extends ApplicationController {

    @GetMapping
    List<CountryDto> getCountries() {
        return countryMapper.toCountriesDtosWithName(countryService.getAll());
    }

    @GetMapping("/{id}")
    CountryDto getCountry(@PathVariable("id") String id) {
        return countryMapper.toCountryDtoWithCode(countryService.get(id));
    }

    @CheckRoles(ADMIN)
    @PostMapping
    CountryDto addCountry(@RequestBody CountryDto countryDto) {
        val country = countryMapper.fromCountryDto(countryDto);
        country.setImage(imageService.safeGet(countryDto.getImageId(), ImageResolutions.ICON));
        return countryMapper.toCountryDtoWithCode(countryService.add(country));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}")
    CountryDto updateCountry(@PathVariable("id") String id, @RequestBody CountryDto countryDto) {
        val country = countryMapper.fromCountryDto(countryDto);
        country.setImage(imageService.safeGet(countryDto.getImageId(), ImageResolutions.ICON));
        return countryMapper.toCountryDtoWithCode(countryService.update(id, country));
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}")
    void deleteCountry(@PathVariable("id") String id) {
        countryService.delete(id);
    }
}
