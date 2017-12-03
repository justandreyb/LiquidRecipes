package com.justandreyb.liquid_recipes.service;

import com.justandreyb.liquid_recipes.entity.BaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public abstract class EntityService<T extends BaseEntity, R extends JpaRepository> {

    @Autowired
    R repository;

    public void add(T entity) {
        repository.save(entity);
    }

    public void update(T entity) {
        add(entity);
    }

    public T get(String entityId) {
        return (T) repository.findOne(entityId);
    }

    public List<T> getAll() {
        return repository.findAll();
    }

    public void delete(String entityId) {
        repository.delete(entityId);
    }

    public void delete(T entity) {
        repository.delete(entity);
    }
}
