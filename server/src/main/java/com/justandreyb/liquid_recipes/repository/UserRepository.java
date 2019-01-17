package com.justandreyb.liquid_recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.justandreyb.liquid_recipes.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);

    User findOneByEmailAndPassword(String email, String password);
}
