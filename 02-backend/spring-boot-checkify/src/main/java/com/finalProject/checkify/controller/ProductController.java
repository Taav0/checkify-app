package com.finalProject.checkify.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.finalProject.checkify.entity.Product;
import com.finalProject.checkify.service.ProductServiceImpl;
import com.finalProject.common.Barcode;
import jackson.ProductListDeserialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/products")

public class ProductController {

    private final ProductServiceImpl productService;
    private String localBarcode;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
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

    @PostMapping("/register")
    public void getBarcode(@RequestBody Barcode barcode){
        localBarcode = barcode.getCode();
        System.out.println(localBarcode);
    }

    @GetMapping("/save-product-from-api/{barcode}")
    public void  getAndSaveProductJsonFromApiToDB(@PathVariable String barcode) {

        final String uri = "https://barcode.monster/api/" + barcode;

        RestTemplate restTemplate = new RestTemplate();
        String jsonResult = restTemplate.getForObject(uri, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            SimpleModule module = new SimpleModule();

            module.addDeserializer(Product.class, new ProductListDeserialization());
            mapper.registerModule(module);

            Product testProduct = mapper.readValue(jsonResult, Product.class);
            saveProduct(testProduct);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}