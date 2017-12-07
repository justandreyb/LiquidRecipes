package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, String> {
}
