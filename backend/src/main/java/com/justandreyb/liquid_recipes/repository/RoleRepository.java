package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
    Role findOneByName(String name);
}
