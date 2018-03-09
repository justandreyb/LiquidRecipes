package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.FlavorType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlavorTypeRepository extends JpaRepository<FlavorType, String> {
    FlavorType findOneByName(String name);
}
