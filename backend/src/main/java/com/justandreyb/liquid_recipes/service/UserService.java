package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.exception.AuthException;
import com.justandreyb.liquid_recipes.repository.UserRepository;
import lombok.val;
import org.springframework.stereotype.Service;

@Service
public class UserService extends EntityService<User, UserRepository> {

    public void signUp(User user) {
        checkEntity(user);
//        TODO: Write
        repository.save(user);
    }

    public User signIn(String email, String password) {
        if (email.isEmpty() || password.isEmpty()) {
            throw new AuthException(
                    getExceptionMessage("Auth.credentials.exception.invalid_data")
            );
        }

        val user = repository.findOneByEmailAndPassword(email, password);
        if (user == null) {
            throw new AuthException(
                    getExceptionMessage("Auth.credentials.exception.not_found")
            );
        }

        return user;
    }
}
