package com.justandreyb.liquid_recipes.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@EqualsAndHashCode(exclude = {"image"}, callSuper = true)
@ToString(exclude = {"image"})
@Entity
public class Country extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 50)
    @Column(nullable = false)
    private String name;

    @NotNull
    @Pattern(regexp = "\\b([A-Z]){2,3}\\b", message = "Country code must be like 'XX' or 'XXX'")
    @Column(nullable = false)
    private String code;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "image_id")
    private Image image;

}
