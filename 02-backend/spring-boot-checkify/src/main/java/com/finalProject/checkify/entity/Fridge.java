package com.finalProject.checkify.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "FRIDGE")
public class Fridge implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;

    @Column(name = "NAME", length = 100)
    private String name;

    public Fridge() {
    }

    public Fridge(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Fridge{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
