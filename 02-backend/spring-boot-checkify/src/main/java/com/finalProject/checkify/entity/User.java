package com.finalProject.checkify.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "USER")
@Data
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;

    @Column(name = "USERNAME", length = 100)
    private String username;

    @Column(name = "PASSWORD", length = 100)
    private String password;

    @Column(name = "NAME", length = 100)
    private String name;

    @Column(name = "EMAIL", length = 100)
    private String email;

    @Column(name = "IS_PREMIUM")
    private boolean isPremium;

    @ManyToMany(mappedBy = "USER")
    private Set<Fridge> fridges = new HashSet<>();
}
