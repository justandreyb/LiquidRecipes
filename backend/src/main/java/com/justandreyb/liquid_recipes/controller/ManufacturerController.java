package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.mapper.ManufacturerMapper;
import com.justandreyb.liquid_recipes.service.CountryService;
import com.justandreyb.liquid_recipes.service.ImageService;
import com.justandreyb.liquid_recipes.service.ManufacturerService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manufacturers")
public class ManufacturerController extends ApplicationController {

    @GetMapping
    List<ManufacturerDto> getAllManufacturers() {
        return manufacturerMapper.toManufacturerDtos(manufacturerService.getAll());
    }

    @GetMapping("/{id}")
    ManufacturerDto getManufacturer(@PathVariable("id") String id) {
        return manufacturerMapper.toManufacturerDto(manufacturerService.get(id));
    }

    @PostMapping
    ManufacturerDto addManufacturer(@RequestBody ManufacturerDto manufacturerDto) {
        val manufacturer = manufacturerMapper.fromManufacturerDto(manufacturerDto);
        manufacturer.setCountry(countryService.get(manufacturerDto.getCountryId()));
        manufacturer.setLogo(manufacturerDto.getLogoId() == null ? null : imageService.get(manufacturerDto.getLogoId()));
        return manufacturerMapper.toManufacturerDto(manufacturerService.add(manufacturer));
    }

    @PostMapping("/{id}")
    ManufacturerDto updateManufacturer(@RequestParam ManufacturerDto manufacturerDto) {
        val manufacturer = manufacturerMapper.fromManufacturerDto(manufacturerDto);
        manufacturer.setCountry(countryService.get(manufacturerDto.getCountryId()));
        manufacturer.setLogo(manufacturerDto.getLogoId() == null ? null : imageService.get(manufacturerDto.getLogoId()));
        return manufacturerMapper.toManufacturerDto(manufacturerService.update(manufacturer));
    }

    @DeleteMapping("/{id}")
    void deleteManufacturer(@PathVariable("id") String id) {
        manufacturerService.delete(id);
    }
}
