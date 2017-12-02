package com.justandreyb.liquid_recipes.repository;

import com.justandreyb.liquid_recipes.bean.UsersFlavors;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsersFlavorsRepository extends CrudRepository<UsersFlavors, String> {
    List<UsersFlavors> findAllByUserId(String userId);
}
