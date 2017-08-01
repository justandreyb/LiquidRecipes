package com.justandreyb.liquid_recipes.bean;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Data
@Entity(name = "flavor")
public class Flavor {

    @Id
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "manufacturer_id", nullable = false)
    private String manufacturerId;
    
    @Column(name = "type_id", nullable = false)
    private String typeId;

    @Column(name = "img_href")
    private String imgHref;

    @Column(name = "description", nullable = false)
    private String description;

    public Flavor() {
       this.id = UUID.randomUUID().toString();
    }

}
