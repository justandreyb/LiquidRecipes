package com.justandreyb.liquid_recipes.service;

import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.justandreyb.liquid_recipes.config.resources.ResourcesConfig;
import com.justandreyb.liquid_recipes.entity.BaseEntity;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;

@NoRepositoryBean
public abstract class EntityService<T extends BaseEntity, R extends JpaRepository> {

    private final static String VALIDATION_EXCEPTION_KEY = ".exception.validation";
    private final static String NOT_FOUND_EXCEPTION_KEY = ".exception.not_found";

    @Autowired
    protected R repository;

    @Autowired
    protected ResourcesConfig resourceService;

    public T add(T entity) throws InvalidEntityException {
        checkReceivedEntity(entity);
        return (T) repository.save(entity);
    }

    public T update(String entityId, T entity) throws InvalidEntityException {
        checkReceivedEntity(entity);

        T existingEntity = (T) repository.findOne(entityId);
        checkFoundEntity(existingEntity);

        if (!existingEntity.equals(entity)) {
            entity = add(entity);
        }
        return entity;
    }

    public T get(String entityId) throws NotFoundException {
        T entity = safeGet(entityId);
        checkFoundEntity(entity);
        return entity;
    }

    public T safeGet(String entityId) {
        return (T) repository.findOne(entityId);
    }

    public Iterable<T> getAll() {
        return (Iterable<T>) repository.findAll();
    }

    public Iterable<T> getAllByRange(int start, int end) {
        start = start >= 0 ? start : 0;
        end = end >= 0 ? end : 0;
        return (Iterable<T>) repository.findAll().stream().skip(start).limit(end).collect(Collectors.toList());
    }

    public void delete(String entityId) throws NotFoundException {
        T entity = get(entityId);
        checkFoundEntity(entity);
        repository.delete(entity);
    }

    public void delete(T entity) throws NotFoundException {
        T loadedEntity = get(entity.getId());
        checkFoundEntity(entity);
        repository.delete(loadedEntity);
    }

    private void checkFoundEntity(T entity) throws NotFoundException {
        if (entity == null) {
            throw new NotFoundException(
                    getExceptionMessage(NOT_FOUND_EXCEPTION_KEY)
            );
        }
    }

    private void checkReceivedEntity(T entity) throws NotFoundException, InvalidEntityException {
        if (entity == null || !entity.isValid()) {
            throw new NotFoundException(
                    getExceptionMessage(VALIDATION_EXCEPTION_KEY)
            );
        }
    }

    void checkEntity(T entity) throws NotFoundException, InvalidEntityException {
        if (entity == null) {
            throw new NotFoundException(
                    getExceptionMessage(NOT_FOUND_EXCEPTION_KEY)
            );
        }
        if (!entity.isValid()) {
            throw new InvalidEntityException(
                    getExceptionMessage(VALIDATION_EXCEPTION_KEY)
            );
        }
    }

    protected String getExceptionMessage(String key) {
        String ex = resourceService.getValue(
                getGenericName() + key);
        if (ex == null || "".equals(ex)) {
            ex = resourceService.getValue(
                    "Default" + key);
        }

        return ex;
    }

    private String getGenericName() {
        String name = ((ParameterizedType) getClass()
                .getGenericSuperclass()).getActualTypeArguments()[0].getTypeName();
        name = name.substring(name.lastIndexOf(".") + 1);
        return name;
    }
}
