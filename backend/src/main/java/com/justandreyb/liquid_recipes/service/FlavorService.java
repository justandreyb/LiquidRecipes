package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.repository.FlavorRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class FlavorService extends EntityService<Flavor, FlavorRepository> {

    public Collection<Flavor> getFlavorsByUser(String userId) {
        return null;
    }

    public Collection<Flavor> getFlavorsByUser(User user) {
        return getFlavorsByUser(user.getId());
    }

    public Collection<Flavor> getTop(int number) {
        return null;
    }
}
