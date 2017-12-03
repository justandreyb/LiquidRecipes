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

    @Column
    private String path;

    @Column
    private Date creationDate = new Date();
}
