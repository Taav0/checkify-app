package com.finalProject.checkify.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCT")
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "BARCODE", length = 20, nullable = false ,unique = true)
    private String barcode;

    @Column(name = "NAME", length = 150)
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "IMAGE_URL")
    private String imageUrl;

    public Product(String barcode, String name, String imageUrl) {
        this.barcode = barcode;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
