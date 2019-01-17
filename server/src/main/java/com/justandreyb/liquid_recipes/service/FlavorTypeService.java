package com.justandreyb.liquid_recipes.service;

import org.springframework.stereotype.Service;

import com.justandreyb.liquid_recipes.entity.FlavorType;
import com.justandreyb.liquid_recipes.repository.FlavorTypeRepository;

@Service
public class FlavorTypeService extends EntityService<FlavorType, FlavorTypeRepository> {
}
