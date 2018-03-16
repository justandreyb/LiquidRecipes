package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode(exclude = {"image"}, callSuper = true)
@ToString(exclude = {"image"})
@Entity
public class Country extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

    @Override
    public boolean isValid() {
        if (name.isEmpty()) {
            return false;
        }
        if (code.isEmpty()) {
            return false;
        }
        if (image != null) {
            return image.isValid();
        }
        return true;
    }
}
