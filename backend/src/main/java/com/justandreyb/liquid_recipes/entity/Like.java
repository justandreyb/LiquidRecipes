package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity(name = "user_like")
@EqualsAndHashCode(exclude = {"user"}, callSuper = false)
@ToString(exclude = {"user"})
public class Like extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private Date creationDate = new Date();
}
