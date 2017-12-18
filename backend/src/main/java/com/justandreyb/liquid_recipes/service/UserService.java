package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.exception.AuthException;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.repository.UserRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.stream.Collectors;

@Service
public class UserService extends EntityService<User, UserRepository> {

    @Autowired
    private FlavorService flavorService;

    public User signUp(User user) {
//        TODO: Write
        checkEntity(user);
        user = repository.save(user);

        return user;
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

    public User getGuest(){
        User user = repository.findOneByEmailAndPassword("test@em.com", "123456");
        if (user == null) {
            user = new User();
            user.setEmail("test@em.com");
            user.setName("Guest");
            user.setPassword("123456");
            user.setFlavors(new HashSet<>(flavorService.getTop(5)));

            user = repository.save(user);
        }
        return user;
    }
}
