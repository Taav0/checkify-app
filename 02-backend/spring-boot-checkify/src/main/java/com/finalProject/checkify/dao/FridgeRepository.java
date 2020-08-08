package com.finalProject.checkify.dao;

import com.finalProject.checkify.entity.Fridge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "fridge", path = "fridge")
public interface FridgeRepository extends JpaRepository<Fridge, Long> {
}
