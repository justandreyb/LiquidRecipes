package com.justandreyb.liquid_recipes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.justandreyb.liquid_recipes.config.annotation.CheckRoles;
import com.justandreyb.liquid_recipes.dto.ManufacturerDto;

import lombok.val;

import static com.justandreyb.liquid_recipes.config.Roles.ADMIN;

@RestController
@RequestMapping("/manufacturers")
public class ManufacturerController extends ApplicationController {

    @GetMapping
    List<ManufacturerDto> getManufacturers() {
        return manufacturerMapper.toManufacturersDtos(manufacturerService.getAll());
    }

    @GetMapping("/{id}")
    ManufacturerDto getManufacturer(@PathVariable("id") String id) {
        return manufacturerMapper.toManufacturerDto(manufacturerService.get(id));
    }

    @CheckRoles(ADMIN)
    @PostMapping
    ManufacturerDto addManufacturer(@RequestBody ManufacturerDto manufacturerDto) {
        val manufacturer = manufacturerMapper.fromManufacturerDto(manufacturerDto);
        manufacturer.setCountry(countryService.safeGet(manufacturerDto.getCountryId()));
        manufacturer.setLogo(imageService.safeGet(manufacturerDto.getLogoId()));
        return manufacturerMapper.toManufacturerDto(manufacturerService.add(manufacturer));
    }

    @CheckRoles(ADMIN)
    @PostMapping("/{id}")
    ManufacturerDto updateManufacturer(@PathVariable("id") String id, @RequestParam ManufacturerDto manufacturerDto) {
        val manufacturer = manufacturerMapper.fromManufacturerDto(manufacturerDto);
        manufacturer.setCountry(countryService.safeGet(manufacturerDto.getCountryId()));
        manufacturer.setLogo(imageService.safeGet(manufacturerDto.getLogoId()));
        return manufacturerMapper.toManufacturerDto(manufacturerService.update(id, manufacturer));
    }

    @CheckRoles(ADMIN)
    @DeleteMapping("/{id}")
    void deleteManufacturer(@PathVariable("id") String id) {
        manufacturerService.delete(id);
    }
}
