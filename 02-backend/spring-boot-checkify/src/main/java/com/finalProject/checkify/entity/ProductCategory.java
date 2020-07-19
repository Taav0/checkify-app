package com.finalProject.checkify.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "CATEGORY")
@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;

    @Column(name = "NAME", length = 100)
    private String name;

    @OneToMany(mappedBy = "CATEGORY")
    private Set<Product> productsInCategory = new HashSet<>();
}
