package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.FlavorManufacturer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlavorManufacturerRepository extends CrudRepository<FlavorManufacturer, String> {
    List<FlavorManufacturer> findByName(String name);
    List<FlavorManufacturer> findAllByCountryCode(String countryCode);
}
