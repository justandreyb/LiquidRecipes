package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
@javax.persistence.Entity
@EqualsAndHashCode(exclude = {"user"}, callSuper = false)
@ToString(exclude = {"user"})
public class Comment extends Entity {

    @Column(length = 512, columnDefinition = "text")
    private String text;

    @Column
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
}
