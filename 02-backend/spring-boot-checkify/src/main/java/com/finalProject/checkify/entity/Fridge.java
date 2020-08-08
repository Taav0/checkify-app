package com.finalProject.checkify.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "FRIDGE")
@Getter
@Setter
public class Fridge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME", length = 100)
    private String name;

    @OneToMany(mappedBy = "fridge", cascade = CascadeType.ALL)
    private Set<Product> productsInFridge;

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonIgnore //Triin added to try out
    @JoinTable(name = "USER_FRIDGE",
            joinColumns = @JoinColumn(name = "FRIDGE_ID"),
            inverseJoinColumns = @JoinColumn(name= "USER_ID"))
    private Set<User> users;
}
