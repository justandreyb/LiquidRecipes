package com.justandreyb.liquid_recipes.config.role;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.justandreyb.liquid_recipes.exception.SecurityException;

@Aspect
@Component
public class RoleValidator {

    private boolean isAllowed(Set<String> roles) {
        Collection<? extends GrantedAuthority> currentRoles =
                SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        return currentRoles.stream().anyMatch(authority -> roles.contains(authority.getAuthority()));
    }

    @Around("execution(* *(..)) && @annotation(CheckRoles)")
    public Object around(ProceedingJoinPoint point) throws Throwable {
        MethodSignature signature = (MethodSignature) point.getSignature();
        CheckRolesAnnotation values = new CheckRolesAnnotation(signature.getMethod());

        if (!isAllowed(values.roles)) {
            throw new SecurityException(values.message);
        }

        return point.proceed();
    }

    private static class CheckRolesAnnotation {
        Set<String> roles;
        String message;

        CheckRolesAnnotation(Method method) {
            CheckRoles checkRoles = method.getAnnotation(CheckRoles.class);
            this.message = checkRoles.message();
            this.roles = Arrays.stream(checkRoles.value()).map(Role::getValue).collect(Collectors.toSet());
        }
    }
}
