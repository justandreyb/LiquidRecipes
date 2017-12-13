package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.mapper.ManufacturerMapper;
import com.justandreyb.liquid_recipes.service.ManufacturerService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manufacturers")
@CrossOrigin(origins = "http://localhost:3000")
public class ManufacturerController {

    @Autowired
    private ManufacturerService manufacturerService;

    @Autowired
    private ManufacturerMapper manufacturerMapper;

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
        val manufacturer = manufacturerService.add(manufacturerMapper.fromManufacturerDto(manufacturerDto));
        return manufacturerMapper.toManufacturerDto(manufacturer);
    }

    @PostMapping("/{id}")
    ManufacturerDto updateManufacturer(@RequestParam ManufacturerDto manufacturerDto) {
        val manufacturer = manufacturerService.update(manufacturerMapper.fromManufacturerDto(manufacturerDto));
        return manufacturerMapper.toManufacturerDto(manufacturer);
    }

    @DeleteMapping("/{id}")
    void deleteManufacturer(@PathVariable("id") String id) {
        manufacturerService.delete(id);
    }
}
