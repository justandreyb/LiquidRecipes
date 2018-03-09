package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Flavor;
import com.justandreyb.liquid_recipes.entity.FlavorType;
import com.justandreyb.liquid_recipes.entity.User;
import com.justandreyb.liquid_recipes.repository.FlavorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class FlavorTypeService extends EntityService<FlavorType, FlavorRepository> {
}
