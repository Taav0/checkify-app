package com.finalProject.checkify.service;

import com.finalProject.checkify.dao.ProductListRepository;
import com.finalProject.checkify.entity.ProductList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductListServiceImpl implements ProductListService {


    @Autowired
    private final ProductListRepository productListRepository;

    public ProductListServiceImpl(ProductListRepository productListRepository) {
        this.productListRepository=productListRepository;
    }

    @Override
    public List<ProductList> findAll() {
        return productListRepository.findAll();
    }

    @Override
    public ProductList findByBarcode(String barcode) {
        Optional<ProductList> result = productListRepository.findByBarcode(barcode);
        ProductList productList = null;

        if (result.isPresent()) {
            productList = result.get();
        } else {
            throw new RuntimeException("Did not find Product by barcode - " + barcode);
        }
        return productList;
    }

    @Override
    public void save(ProductList theProductList) {
        productListRepository.save(theProductList);
    }


    @Override
    public void deleteByBarcode(String barcode) {
        productListRepository.deleteByBarcode(barcode);

    }
}