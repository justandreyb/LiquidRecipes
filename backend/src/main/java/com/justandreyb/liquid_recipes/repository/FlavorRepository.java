package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Flavor;

public interface FlavorRepository extends JpaRepository<Flavor, String> {
}
