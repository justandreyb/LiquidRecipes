package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
}
