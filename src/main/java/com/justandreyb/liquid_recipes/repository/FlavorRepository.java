package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.Flavor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FlavorRepository extends CrudRepository<Flavor, String> {
    List<Flavor> findByName(String name);
    List<Flavor> findAllByTypeId(String typeId);
    List<Flavor> findAllByManufacturerId(String manufacturerId);
}