package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.BaseEntity;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.Collection;

@NoRepositoryBean
public abstract class EntityService<T extends BaseEntity, R extends JpaRepository> {

    private final static String VALIDATION_EXCEPTION_KEY = "validation.exception.";
    private final static String NOT_FOUND_EXCEPTION_KEY = "not_found.exception.";

    @Autowired
    protected R repository;

    @Autowired
    protected ResourceService resourceService;

    public void add(T entity) throws InvalidEntityException {
        checkEntity(entity);
        repository.save(entity);
    }

    public void update(T entity) throws InvalidEntityException {
        add(entity);
    }

    public T get(String entityId) throws NotFoundException {
        T entity = (T) repository.findOne(entityId);
        if (entity == null || entity.getId() == null) {
            throw new NotFoundException(
                    getExceptionMessage(NOT_FOUND_EXCEPTION_KEY)
            );
        }
        return entity;
    }

    public Collection<T> getAll() {
        return repository.findAll();
    }

    public void delete(String entityId) throws NotFoundException {
        T entity = get(entityId);
        repository.delete(entity);
    }

    public void delete(T entity) throws NotFoundException {
        T loadedEntity = get(entity.getId());
        repository.delete(loadedEntity);
    }

    void checkEntity(T entity) throws InvalidEntityException {
        if (!entity.isValid()) {
            throw new InvalidEntityException(
                    getExceptionMessage(VALIDATION_EXCEPTION_KEY)
            );
        }
    }

    private String getExceptionMessage(String validationExceptionKey) {
        String ex = resourceService.getValue(
                validationExceptionKey + repository.getClass().getSimpleName());
        if (ex == null || "".equals(ex)) {
            ex = resourceService.getValue(
                    validationExceptionKey + "Default");
        }

        return ex;
    }
}
