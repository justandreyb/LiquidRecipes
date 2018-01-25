package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Role;
import com.justandreyb.liquid_recipes.repository.RoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleService extends EntityService<Role, RoleRepository> {

    public Role getByRole(com.justandreyb.liquid_recipes.config.role.Role role) {
        return repository.findOneByName(role.getValue());
    }

    public void saveRole(com.justandreyb.liquid_recipes.config.role.Role role) {
        Role val = new Role();
        val.setName(role.getValue());
        repository.save(val);
    }

}
