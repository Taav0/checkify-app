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

    @Column(name = "BARCODE", length = 20)
    private String barcode;

    @Column(name = "NAME", length = 150)
    private String name;

    @Column(name = "EXPIRE_DATE")
    private Date date;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "IMAGE_URL")
    private String imageUrl;

  /*  @ManyToOne
    @JoinColumn(name = "CATEGORY_ID")
    private Category categoryId;

    @ManyToOne
    @JoinColumn(name = "FRIDGE_ID")
    private  Fridge fridge;*/

    @Column(name = "CATEGORY_ID")
    private Long categoryId;

    @Column(name = "FRIDGE_ID")
    private  Long fridgeId;

}
