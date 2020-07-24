package com.beinglocal.controller;

import com.beinglocal.dto.ProductCategoryDTO;
import com.beinglocal.entity.ProductCategory;
import com.beinglocal.service.classification.SearchProductCategoryService;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchProductCategoryController {

    private SearchProductCategoryService service;

    @Autowired
    public SearchProductCategoryController(SearchProductCategoryService service) {
        this.service = service;
    }

    @GetMapping("/v1.0/product-categories")
    public ResponseEntity findAllCategories(){
        final List<ProductCategory> byParentId = service.findByParentId(null);
        List<ProductCategoryDTO> productCategoryDTOS = convertListDTOFromListOfEntity(byParentId);
        return new ResponseEntity<>(productCategoryDTOS,HttpStatus.OK);
    }

    private List<ProductCategoryDTO> convertListDTOFromListOfEntity(List<ProductCategory> byParentId) {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.convertValue(byParentId, List.class);
    }

    @GetMapping("/v1.0/product-category/{id}")
    public ResponseEntity findById(@PathVariable String id){
        final ProductCategory byId = service.findById(id);
        ObjectMapper objectMapper = new ObjectMapper();
        final ProductCategoryDTO productCategoryDTO = objectMapper.convertValue(byId, ProductCategoryDTO.class);
        return new ResponseEntity<>(productCategoryDTO,HttpStatus.OK);
    }

    @GetMapping("/v1.0/product-category/{id}/children")
    public ResponseEntity findByParentId(@PathVariable String id){
        final List<ProductCategory> byParentId = service.findByParentId(id);
        final List<ProductCategoryDTO> productCategoryDTOS = convertListDTOFromListOfEntity(byParentId);
        return new ResponseEntity<>(productCategoryDTOS,HttpStatus.OK);
    }
}
