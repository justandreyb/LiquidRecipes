package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService extends EntityService<User, UserRepository> {
}
