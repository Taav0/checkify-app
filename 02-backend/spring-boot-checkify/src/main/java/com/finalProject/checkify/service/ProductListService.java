package com.finalProject.checkify.service;

import com.finalProject.checkify.entity.ProductList;

import java.util.List;

public interface ProductListService {

     List<ProductList> findAll();
     ProductList findByBarcode(String barcode);
     void save(ProductList theProductList);
     void deleteByBarcode(String barcode);

}
