package com.justandreyb.liquid_recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lombok.val;

import com.justandreyb.liquid_recipes.config.role.Role;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.exception.AuthException;
import com.justandreyb.liquid_recipes.repository.UserRepository;

@Service
public class UserService extends EntityService<User, UserRepository> {

    @Autowired
    private ShaPasswordEncoder shaPasswordEncoder;

    @Autowired
    private RoleService roleService;

    public User signUp(User user) {
        checkEntity(user);
        user.setPassword(shaPasswordEncoder.encodePassword(user.getPassword(), ""));

        val foundUser = repository.findOneByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser != null) {
            throw new AuthException(
                getExceptionMessage("Auth.credentials.exception.already_exists")
            );
        }
        user.getRoles().add(roleService.getByRole(Role.CLIENT));
        user = repository.save(user);

        return user;
    }

    public User getCurrentUser(){
        String userId = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = repository.findOne(userId);
        if (user == null) {
            throw new AuthException(
                getExceptionMessage("Auth.credentials.exception.not_found")
            );
        }
        return user;
    }
}
