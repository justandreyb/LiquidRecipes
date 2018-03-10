package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.mapper.CountryMapper;
import com.justandreyb.liquid_recipes.service.CountryService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController extends ApplicationController {

    @GetMapping
    List<CountryDto> getAllCountries() {
        return countryMapper.toCountryDtos(countryService.getAll());
    }

    @GetMapping("/{id}")
    CountryDto getCountry(@PathVariable("id") String id) {
        return countryMapper.toCountryDto(countryService.get(id));
    }

    @PostMapping
    CountryDto addCountry(@RequestBody CountryDto countryDto) {
        val country = countryService.add(countryMapper.fromCountryDto(countryDto));
        return countryMapper.toCountryDto(country);
    }

    @PostMapping("/{id}")
    CountryDto updateCountry(@PathVariable("id") CountryDto countryDto) {
        val country = countryService.update(countryMapper.fromCountryDto(countryDto));
        return countryMapper.toCountryDto(country);
    }

    @DeleteMapping("/{id}")
    void deleteCountry(@PathVariable("id") String id) {
        countryService.delete(id);
    }
}
