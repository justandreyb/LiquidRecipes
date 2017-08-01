package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "users_flavors")
public class UsersFlavors {

    @Id
    private String id;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "flavor_id", nullable = false)
    private String flavorId;

    public UsersFlavors() {
        this.id = UUID.randomUUID().toString();
    }

}
