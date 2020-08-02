package com.finalProject.checkify.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.finalProject.checkify.entity.ProductList;
import com.finalProject.checkify.service.ProductListServiceImpl;
import jackson.ProductListDeserialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/productList")
public class ProductListController {

    private final ProductListServiceImpl productListService;
    private String localBarcode;

    @Autowired
    public ProductListController(ProductListServiceImpl productListService) {
        this.productListService = productListService;
    }

    @GetMapping("/show")
    public List<ProductList> getAllProducts() {
        return productListService.findAll();
    }

    @GetMapping("/{barcode}")
    public ProductList getProductListByBarcode(@PathVariable(value = "barcode") String theBarcode) {

        return productListService.findByBarcode(theBarcode);
    }

    @PostMapping()
    public void saveProduct(@RequestBody ProductList theProduct){
        productListService.save(theProduct);
    }

    @DeleteMapping("/{barcode}")
    public void deleteProduct(@PathVariable(value = "barcode") String  barcode){
        productListService.deleteByBarcode(barcode);
    }

    @PostMapping("/register/{barcode}")
    public void getBarcode(@PathVariable(value = "barcode") String barcode){
        localBarcode = barcode;
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

            module.addDeserializer(ProductList.class, new ProductListDeserialization());
            mapper.registerModule(module);

            ProductList testProduct = mapper.readValue(jsonResult, ProductList.class);
            saveProduct(testProduct);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}