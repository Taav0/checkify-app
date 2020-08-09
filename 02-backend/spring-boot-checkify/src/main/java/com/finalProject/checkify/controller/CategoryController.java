package com.finalProject.checkify.controller;

import com.finalProject.checkify.entity.Category;
import com.finalProject.checkify.entity.Fridge;
import com.finalProject.checkify.service.CategoryServiceImpl;
import com.finalProject.checkify.service.FridgeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/category")
public class CategoryController {

    private final CategoryServiceImpl categoryService;

    @Autowired
    public CategoryController(CategoryServiceImpl categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping()
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();

    }



}
