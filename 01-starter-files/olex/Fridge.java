package com.finalProject.checkify.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "FRIDGE")
@Getter
@Setter
/*@NoArgsConstructor
@AllArgsConstructor*/
public class Fridge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NAME", length = 100)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "fridge")
    private Set<Product> productsInFridge;

    @ManyToMany(cascade = CascadeType.ALL)
    // we have to declare the name of the table, that does the mapping, show witch
    @JoinTable(name = "USER_FRIDGE",
            joinColumns = @JoinColumn(name = "FRIDGE_ID"),
            inverseJoinColumns = @JoinColumn(name= "USER_ID"))
    private Set<User> users;
}
