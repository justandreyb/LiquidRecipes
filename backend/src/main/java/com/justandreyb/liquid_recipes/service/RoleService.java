package com.justandreyb.liquid_recipes.service;

import org.springframework.stereotype.Service;

import com.justandreyb.liquid_recipes.config.Roles;
import com.justandreyb.liquid_recipes.entity.Role;
import com.justandreyb.liquid_recipes.repository.RoleRepository;

@Service
public class RoleService extends EntityService<Role, RoleRepository> {

    public Role getByRole(Roles role) {
        return repository.findOneByName(role.getValue());
    }

    public void saveRole(Roles role) {
        Role val = new Role();
        val.setName(role.getValue());
        repository.save(val);
    }

}
