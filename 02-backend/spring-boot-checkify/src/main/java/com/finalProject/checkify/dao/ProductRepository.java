package com.finalProject.checkify.dao;

import com.finalProject.checkify.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {

   /* Page<Product> findByFridgeId(Long id, Pageable pageable);

    Page<Product> findByNameContaining(String name, Pageable pageable);*/

}

