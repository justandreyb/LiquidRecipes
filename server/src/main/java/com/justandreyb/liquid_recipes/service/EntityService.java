package com.justandreyb.liquid_recipes.service;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.justandreyb.liquid_recipes.entity.BaseEntity;
import com.justandreyb.liquid_recipes.exception.InvalidEntityException;
import com.justandreyb.liquid_recipes.exception.NotFoundException;
import com.justandreyb.liquid_recipes.util.GenericUtils;
import com.justandreyb.liquid_recipes.util.MessagesProvider;
import com.justandreyb.liquid_recipes.validator.Validator;

@NoRepositoryBean
public abstract class EntityService<T extends BaseEntity, R extends JpaRepository> {

    private final static String VALIDATION_EXCEPTION_KEY = ".exception.validation";
    private final static String NOT_FOUND_EXCEPTION_KEY = ".exception.not_found";

    @Autowired
    protected R repository;

    @Autowired
    protected MessagesProvider messagesProvider;

    public T add(T entity) throws InvalidEntityException {
        checkReceivedEntity(entity);
        return (T) repository.save(entity);
    }

    public T update(String entityId, T entity) throws InvalidEntityException {
        checkReceivedEntity(entity);

        T existingEntity = (T) repository.findById(entityId).orElse(null);
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
        if (entityId == null) {
            return null;
        }
        return (T) repository.findById(entityId).orElse(null);
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
            throw new NotFoundException(getExceptionMessage(NOT_FOUND_EXCEPTION_KEY));
        }
    }

    private void checkReceivedEntity(T entity) throws NotFoundException, InvalidEntityException {
        if (entity == null) {
            throw new InvalidEntityException(getExceptionMessage(VALIDATION_EXCEPTION_KEY));
        }
        validateEntity(entity);
    }

    void checkEntity(T entity) throws NotFoundException, InvalidEntityException {
        if (entity == null) {
            throw new NotFoundException(getExceptionMessage(NOT_FOUND_EXCEPTION_KEY));
        }
        validateEntity(entity);
    }

    void validateEntity(T entity) throws InvalidEntityException {
        Map<String, String> fieldsWithErrors = Validator.validate(entity);
        if (fieldsWithErrors.size() != 0) {
            throw new InvalidEntityException(getExceptionMessage(VALIDATION_EXCEPTION_KEY), fieldsWithErrors);
        }
    }

    protected String getExceptionMessage(String key) {
        String ex = messagesProvider.getValue(GenericUtils.getClassName(this.getClass()) + key);
        if (ex == null || "".equals(ex)) {
            ex = messagesProvider.getValue("Default" + key);
        }

        return ex;
    }
}
