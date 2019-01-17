package com.justandreyb.liquid_recipes.service;

import org.springframework.stereotype.Service;

import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.repository.CountryRepository;

@Service
public class CountryService extends EntityService<Country, CountryRepository> {
}
