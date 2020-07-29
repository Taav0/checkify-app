package com.finalProject.checkify.controller;

import com.finalProject.checkify.dao.ProductRepository;
import com.finalProject.checkify.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @DeleteMapping("/products/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long productId)
            throws ResourceNotFoundException {
        Product theProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));

        productRepository.delete(theProduct);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
