package com.justandreyb.liquid_recipes.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import com.justandreyb.liquid_recipes.validator.Validatable;

@Data
@Entity
@EqualsAndHashCode(exclude = {"user"}, callSuper = false)
@ToString(exclude = {"user"})
public class Comment extends BaseEntity implements Validatable {

    @NotNull
    @Size(min = 1, max = 512, message = "Comment must contain at least one symbol")
    @Column(length = 512, columnDefinition = "clob", nullable = false)
    private String text;

    @NotNull
    @Column
    private Date date = new Date();

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

}
