package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Data
@EqualsAndHashCode(exclude = {"image"}, callSuper = true)
@ToString(exclude = {"image"})
@Entity
public class Country extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String code;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
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
