package com.justandreyb.liquid_recipes.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import java.util.Date;

@Data
@Entity
@EqualsAndHashCode(exclude = {"user"}, callSuper = false)
@ToString(exclude = {"user"})
public class Comment extends BaseEntity {

    @Column(length = 512, columnDefinition = "clob", nullable = false)
    private String text;

    @Column
    private Date date = new Date();

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Override
    public boolean isValid() {
        if (text.isEmpty() || text.length() > 512) {
            return false;
        }
        if (user == null) {
            return false;
        } else {
            return user.isValid();
        }
    }
}
