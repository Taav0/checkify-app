package com.finalProject.checkify.service;

import com.finalProject.checkify.entity.Product;

import java.util.List;

public interface ProductService {

     List<Product> findAll();
     Product findById(Long theId);
 /*    Page<Product> findByFridgeId(Long fridgeId, Pageable pageable);
     Page<Product> findByNameContaining(String name, Pageable pageable);
*/
     void save(Product theProduct);
     void deleteById(Long id);

}
