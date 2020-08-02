package com.finalProject.checkify.controller;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.finalProject.checkify.dao.ProductListRepository;
import com.finalProject.checkify.entity.Product;
import com.finalProject.checkify.entity.ProductList;
import com.finalProject.checkify.service.ProductListServiceImpl;
import com.finalProject.checkify.service.ProductServiceImpl;
import jackson.ProductListDeserialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
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

    @PostMapping("/products/register/{barcode}")
    public void getBarcode(@PathVariable(value = "barcode") String barcode){
        localBarcode = barcode;
        System.out.println(localBarcode);
    }

    @GetMapping("/products/save-product-from-api/{barcode}")
    public void  getAndSaveProductJsonFromApiToDB(@PathVariable String barcode) {

        final String uri = "https://barcode.monster/api/" + barcode;

        RestTemplate restTemplate = new RestTemplate();
        String jsonResult = restTemplate.getForObject(uri, String.class);
        System.out.println(jsonResult);

        try {
            ObjectMapper mapper = new ObjectMapper();
            SimpleModule module = new SimpleModule();

            module.addDeserializer(ProductList.class, new ProductListDeserialization());
            mapper.registerModule(module);

            ProductList testProduct = mapper.readValue(jsonResult, ProductList.class);
            System.out.println(testProduct.getImageUrl());
            productListService.save(testProduct);

        } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}