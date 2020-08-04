package com.finalProject.checkify.controller;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.finalProject.checkify.entity.Product;
import com.finalProject.checkify.service.ProductServiceImpl;
import com.finalProject.common.Barcode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "*",  allowedHeaders = "*")
// TODO add products to URL and remove from the end point
public class ProductController {

    private final ProductServiceImpl productService;
    private String localBarcode;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        System.out.println("Inside getAllProducts()");
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

    @PostMapping("/register")
    public void getBarcode(@RequestBody Barcode barcode){
        localBarcode = barcode.getCode();
        System.out.println(localBarcode);
    }

    @GetMapping("/products/getBarcode/{barcode}")
    public void  getAndSaveProductJsonFromApiToDB(@PathVariable String barcode) {

        final String uri = "https://barcode.monster/api/" + barcode;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.configure(
                    DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            Product testProduct = mapper.readValue(result, Product.class);
            saveProduct(testProduct);

        } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
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
