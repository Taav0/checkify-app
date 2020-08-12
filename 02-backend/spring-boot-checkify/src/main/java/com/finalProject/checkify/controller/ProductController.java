package com.finalProject.checkify.controller;

import com.finalProject.checkify.common.Barcode;
import com.finalProject.checkify.entity.Product;
import com.finalProject.checkify.entity.ProductList;
import com.finalProject.checkify.service.ProductListServiceImpl;
import com.finalProject.checkify.service.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/products")

public class ProductController {

    private final ProductListServiceImpl productListService;
    private final ProductServiceImpl productService;
    private String localBarcode;

    @Autowired
    public ProductController(ProductServiceImpl productService, ProductListServiceImpl productListService) {
        this.productListService = productListService;
        this.productService = productService;
    }

    @GetMapping("/show")
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{barcode}")
    public Product getProductListByBarcode(@PathVariable(value = "barcode") String theBarcode) {

        return productService.findByBarcode(theBarcode);
    }

    @PostMapping()
    public void saveProduct(@RequestBody Product theProduct){
        productService.save(theProduct);
    }

    @DeleteMapping("/{barcode}")
    public void deleteProduct(@PathVariable(value = "barcode") String  barcode){
        productService.deleteByBarcode(barcode);
    }


    @GetMapping("/register/{code}")
    public ProductList getBarcodeProcessAndReturnProduct(@PathVariable(value = "code") String barcode){
        localBarcode = barcode;
        System.out.println(localBarcode);
        ProductList productTest = null;

        if (productService.findByBarcode(localBarcode) != null){
            return productListService.findByBarcode(localBarcode);

        }else if (productService.getProductFromMonsterApi(localBarcode) != null){
            productService.save(productService.getProductFromMonsterApi(localBarcode));
            return productListService.findByBarcode(localBarcode);

        }else {
            productTest = new ProductList();
            productTest.setBarcode(localBarcode);
            productTest.setImageUrl("assets/images/products/placeholder.png");
            return productTest;
        }
    }
}