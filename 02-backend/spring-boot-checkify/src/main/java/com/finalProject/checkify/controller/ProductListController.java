package com.finalProject.checkify.controller;

import com.finalProject.checkify.entity.ProductList;
import com.finalProject.checkify.service.ProductListServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ProductListController {

    private final ProductListServiceImpl productListService;
    private String localBarcode;

    @Autowired
    public ProductListController(ProductListServiceImpl productListService) {
        this.productListService = productListService;
    }

    @GetMapping("/productList")
    public List<ProductList> getAllProductList() {
        return productListService.findAll();
    }

    @GetMapping("/productList/{id}")
    public ProductList getProductById(@PathVariable(value = "id") Long productId) {

        return productListService.findById(productId);
    }

    @PostMapping("/productList/{id}")
    public void saveProduct(@RequestBody ProductList productList){
        productListService.save(productList);
    }

    @DeleteMapping("/productList/{id}")
    public void deleteProduct(@PathVariable(value = "id") Long productId){
        productListService.deleteById(productId);
    }

    @GetMapping("/products/search/findByFridgeId/{id}")
    public Page<ProductList> findByFridgeId(@PathVariable(value = "id") Long productId, Pageable pageable) {

        return productListService.findByFridgeId(productId, pageable);
    }

    @GetMapping("/products/search/findByNameContaining/{name}")
    public Page<ProductList> findByNameContaining(@PathVariable(value = "name") String name, Pageable pageable) {

        return productListService.findByNameContaining(name, pageable);
    }
}
