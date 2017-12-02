package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Manufacturer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlavorManufacturerRepository extends CrudRepository<Manufacturer, String> {
    List<Manufacturer> findByName(String name);
    List<Manufacturer> findAllByCountryCode(String countryCode);
}
