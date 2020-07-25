package com.beinglocal.controller;

import com.beinglocal.dto.ProductClassificationSearchCriteria;
import com.beinglocal.entity.ProductClassification;
import com.beinglocal.service.classification.SearchProductClassificationService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchProductClassificationController {

    @Autowired
    private SearchProductClassificationService searchProductClassificationService;

    @GetMapping("/v1.0/product-classifications")
    public ResponseEntity findAllByType(@RequestParam(value = "type",required = false) String type){
        if(StringUtils.isBlank(type) || StringUtils.isEmpty(type)) {
            type = ProductClassification.Type.SEGMENT.text();
        }
        final ProductClassificationSearchCriteria searchCriteria = ProductClassificationSearchCriteria.builder()
                                                                                             .type(type)
                                                                                             .build();
        final List<ProductClassification> all = searchProductClassificationService.findAll(searchCriteria);
        return new ResponseEntity<>(all,HttpStatus.OK);
    }

    @GetMapping("/v1.0/product-classification/{id}")
    public ResponseEntity findById(@PathVariable String id){
        final ProductClassification byId = searchProductClassificationService.findById(id);
        return new ResponseEntity<>(byId,HttpStatus.OK);
    }

    @GetMapping("/v1.0/product-classification/{id}/children")
    public ResponseEntity findByParentId(@PathVariable String id){
        final List<ProductClassification> byParentId = searchProductClassificationService.findByParentId(id);
        return new ResponseEntity<>(byParentId,HttpStatus.OK);
    }
}
