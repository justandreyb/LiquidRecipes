package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.Country;
import com.justandreyb.liquid_recipes.repository.CountryRepository;
import org.springframework.stereotype.Service;

@Service
public class CountryService extends EntityService<Country, CountryRepository> {
}
