package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, String> {
}
