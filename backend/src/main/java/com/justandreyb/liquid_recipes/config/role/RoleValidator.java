package com.justandreyb.liquid_recipes.config.role;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Arrays;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

public class RoleValidator implements ConstraintValidator<CheckRoles, Role> {

    private Set<String> roles;

    @Override
    public void initialize(CheckRoles checkRoles) {
        roles = Arrays.stream(checkRoles.value()).map(Role::getValue).collect(Collectors.toSet());
    }

    @Override
    public boolean isValid(Role role, ConstraintValidatorContext constraintValidatorContext) {
        Collection<? extends GrantedAuthority> currentRoles =
                SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        return currentRoles.stream().anyMatch(authority -> roles.contains(authority.getAuthority()));
    }
}
