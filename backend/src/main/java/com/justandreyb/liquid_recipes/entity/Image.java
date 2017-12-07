package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.Date;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Image extends BaseEntity {

    @Column(nullable = false)
    private String path;

    @Column(nullable = false)
    private Date creationDate = new Date();

    @Override
    public boolean isValid() {
        if (path.isEmpty()) {
            return false;
        }
        if (creationDate == null) {
            return false;
        }
        return true;
    }
}
