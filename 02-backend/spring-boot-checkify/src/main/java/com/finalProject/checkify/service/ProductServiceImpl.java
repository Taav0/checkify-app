package com.finalProject.checkify.service;

import com.finalProject.checkify.dao.ProductListRepository;
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
    @Autowired
    private final ProductListRepository productListRepository;

    public ProductServiceImpl(ProductRepository productRepository,
                              ProductListRepository productListRepository) {
        this.productRepository = productRepository;
        this.productListRepository=productListRepository;
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long theId) {
        Optional<Product> result = productRepository.findById(theId);
        Product product = null;

        if (result.isPresent()) {
            product = result.get();
        } else {
            throw new RuntimeException("Did not find Product id - " + theId);
        }
        return product;
    }
/*
    @Override
    public Page<Product> findByFridgeId(Long fridgeId, Pageable pageable) {
        return productRepository.findByFridgeId(fridgeId, pageable);
    }

    @Override
    public Page<Product> findByNameContaining(String name, Pageable pageable) {
        return productRepository.findByNameContaining(name, pageable);
    }*/

    @Override
    public void save(Product theProduct) {
        productRepository.save(theProduct);

    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}