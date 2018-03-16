package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.FlavorType;

public interface FlavorTypeRepository extends JpaRepository<FlavorType, String> {
    FlavorType findOneByName(String name);
}
