package com.finalProject.checkify.entity;

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

    //TODO change object to the foreign key
    @OneToMany(mappedBy = "fridge", cascade = CascadeType.ALL)
    private Set<ProductList> productsInFridge;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "CUSTOMER_FRIDGE",
            joinColumns = @JoinColumn(name = "FRIDGE_ID"),
            inverseJoinColumns = @JoinColumn(name= "CUSTOMER_ID"))
    private Set<Customer> customers;
}
