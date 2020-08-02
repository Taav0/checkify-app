package com.finalProject.checkify.dao;

import com.finalProject.checkify.entity.ProductList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductListRepository extends JpaRepository<ProductList, Long> {

    void deleteByBarcode(String barcode);
    Optional<ProductList> findByBarcode(String barcode);

}

