package com.finalProject.checkify.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "PRODUCT_LIST")
@Data
public class ProductList {

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

    public ProductList(String barcode, String name, String imageUrl) {
        this.barcode = barcode;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
