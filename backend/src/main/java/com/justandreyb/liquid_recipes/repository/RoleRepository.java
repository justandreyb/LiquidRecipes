package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.Role;

public interface RoleRepository extends JpaRepository<Role, String> {
    Role findOneByName(String name);
}
