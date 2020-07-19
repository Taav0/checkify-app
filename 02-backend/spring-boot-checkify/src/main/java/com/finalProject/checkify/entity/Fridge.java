package com.finalProject.checkify.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FRIDGE")
@Getter
@Setter
public class Fridge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME", length = 100)
    private String name;

    @OneToMany(mappedBy = "FRIDGE")
    private Set<Product> productsInFridge = new HashSet<>();

    @ManyToMany(cascade = CascadeType.ALL) // we have to declare the name of the table, that does the mapping, show witch
    @JoinTable(name = "USER_FRIDGE",
            joinColumns = @JoinColumn(name = "ID"),inverseJoinColumns = @JoinColumn(name= "USER_ID"))
    private Set<User> users = new HashSet<>();
}
