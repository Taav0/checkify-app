package com.finalProject.checkify.controller;

import com.finalProject.checkify.entity.Product;
import com.finalProject.checkify.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ProductController {

    private final ProductServiceImpl productService;
    private String localBarcode;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable(value = "id") Long productId) {

        return productService.findById(productId);
    }

    @PostMapping("/products/{id}")
    public void saveProduct(@RequestBody Product theProduct){
        productService.save(theProduct);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable(value = "id") Long productId){
        productService.deleteById(productId);
    }

  /*  @GetMapping("/products/search/findByFridgeId/{id}")
    public Page<Product> findByFridgeId(@PathVariable(value = "id") Long productId, Pageable pageable) {

        return productService.findByFridgeId(productId, pageable);
    }*/


//
//    Page<Product> findByFridgeId(@RequestParam("id") Long id, Pageable pageable);
//
//    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
