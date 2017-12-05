package com.justandreyb.liquid_recipes.controller;

import com.justandreyb.liquid_recipes.dto.ManufacturerDto;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.mapper.ManufacturerMapper;
import com.justandreyb.liquid_recipes.service.ManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manufacturers")
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
    ManufacturerDto getManufacturer(@PathVariable("id") String id) throws NotFoundException {
        return manufacturerMapper.toManufacturerDto(manufacturerService.get(id));
    }

    @PostMapping
    void addManufacturer(@RequestBody ManufacturerDto manufacturerDto) throws InvalidEntityException {
        manufacturerService.add(manufacturerMapper.fromManufacturerDto(manufacturerDto));
    }

    @PostMapping("/{id}")
    void updateManufacturer(@RequestParam ManufacturerDto manufacturerDto) throws InvalidEntityException {
        manufacturerService.update(manufacturerMapper.fromManufacturerDto(manufacturerDto));
    }

    @DeleteMapping("/{id}")
    void deleteManufacturer(@PathVariable("id") String id) throws NotFoundException {
        manufacturerService.delete(id);
    }
}
