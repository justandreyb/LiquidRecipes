package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
