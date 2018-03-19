package com.justandreyb.liquid_recipes.validator;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.ValidatorFactory;

import com.justandreyb.liquid_recipes.entity.BaseEntity;

public class Validator {

    public static <T extends BaseEntity> Map<String, String> validate(T entity) {
        Map<String, String> fieldsWithErrors = new HashMap<>();
        if (entity instanceof Validatable) {
            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            javax.validation.Validator validator = factory.getValidator();

            Set<ConstraintViolation<T>> constraintViolations = validator.validate(entity);
            constraintViolations.forEach(cv -> fieldsWithErrors.put(cv.getPropertyPath().toString(), cv.getMessage()));
        }

        return fieldsWithErrors;
    }


}
