package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.CountryDto;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.mapper.CountryMapper;
import com.justandreyb.liquid_recipes.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @Autowired
    private CountryMapper countryMapper;

    @GetMapping
    List<CountryDto> getAllCountries() {
        return countryMapper.toCountryDtos(countryService.getAll());
    }

    @GetMapping("/{id}")
    CountryDto getCountry(@PathVariable("id") String id) throws NotFoundException {
        return countryMapper.toCountryDto(countryService.get(id));
    }

    @PostMapping
    void addCountry(@RequestBody CountryDto countryDto) throws InvalidEntityException {
        countryService.add(countryMapper.fromCountryDto(countryDto));
    }

    @PostMapping("/{id}")
    void updateCountry(@PathVariable("id") CountryDto countryDto) throws InvalidEntityException {
        countryService.update(countryMapper.fromCountryDto(countryDto));
    }

    @DeleteMapping("/{id}")
    void deleteCountry(@PathVariable("id") String id) throws NotFoundException {
        countryService.delete(id);
    }
}
