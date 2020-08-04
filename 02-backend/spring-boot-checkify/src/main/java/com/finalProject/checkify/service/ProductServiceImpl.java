package com.finalProject.checkify.service;

import com.finalProject.checkify.dao.ProductRepository;
import com.finalProject.checkify.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {


    @Autowired
    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository =productRepository;
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findByBarcode(String barcode) {
        Optional<Product> result = productRepository.findByBarcode(barcode);
        Product theProduct = null;

        if (result.isPresent()) {
            theProduct = result.get();
        } else {
            throw new RuntimeException("Did not find Product by barcode - " + barcode);
        }
        return theProduct;
    }

    @Override
    public void save(Product theProduct) {
        productRepository.save(theProduct);
    }


    @Override
    public void deleteByBarcode(String barcode) {
        productRepository.deleteByBarcode(barcode);

    }
}