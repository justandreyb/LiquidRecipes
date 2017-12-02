package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import java.util.Date;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(callSuper = false)
public class Image extends Entity {

    @Column
    private String path;

    @Column
    private Date creationDate;
}
