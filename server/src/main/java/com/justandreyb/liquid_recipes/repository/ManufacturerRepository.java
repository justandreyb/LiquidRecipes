package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Manufacturer;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, String> {
}
