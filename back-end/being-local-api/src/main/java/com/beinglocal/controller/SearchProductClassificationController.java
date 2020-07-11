package com.beinglocal.controller;

import com.beinglocal.dto.SearchDTO;
import com.beinglocal.entity.ProductClassification;
import com.beinglocal.service.classification.SearchProductClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SearchProductClassificationController {

    @Autowired
    private SearchProductClassificationService searchProductClassificationService;

    @GetMapping("/product-classification")
    public ResponseEntity findAllByType(){
        final ArrayList<ProductClassification> objects = new ArrayList<>(0);
        final List<ProductClassification> all = searchProductClassificationService.findAll(new SearchDTO());
        return new ResponseEntity<>(all,HttpStatus.OK);
    }
}
