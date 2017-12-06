package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Flavor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface FlavorRepository extends JpaRepository<Flavor, String> {

}
