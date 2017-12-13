package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.repository.FlavorRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FlavorService extends EntityService<Flavor, FlavorRepository> {

    @Autowired
    private UserService userService;

    public Collection<Flavor> getFlavorsByUser(String userId) {
        return userService.get(userId).getFlavors();
    }

    public Collection<Flavor> getFlavorsByUser(User user) {
        return getFlavorsByUser(user.getId());
    }

    public Collection<Flavor> getTop(int number) {
        // TODO: Create get top method
        return getAllByRange(0, number);
    }

    public Flavor addToUser(String userId, Flavor flavor) {
        checkEntity(flavor);
        flavor = repository.save(flavor);

        val user = userService.get(userId);
        user.getFlavors().add(flavor);
        userService.update(user);

        return flavor;
    }
}
