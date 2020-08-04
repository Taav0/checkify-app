package com.finalProject.checkify.dao;

import com.finalProject.checkify.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    void deleteByBarcode(String barcode);
    Optional<Product> findByBarcode(String barcode);

}

