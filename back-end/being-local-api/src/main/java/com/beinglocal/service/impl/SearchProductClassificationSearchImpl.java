package com.beinglocal.service.impl;

import com.beinglocal.dto.ProductClassificationSearchCriteria;
import com.beinglocal.entity.ProductClassification;
import com.beinglocal.persistence.ProductClassificationMapper;
import com.beinglocal.service.classification.SearchProductClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchProductClassificationSearchImpl implements SearchProductClassificationService {

    private ProductClassificationMapper productClassificationMapper;

    @Autowired
    public SearchProductClassificationSearchImpl(ProductClassificationMapper productClassificationMapper) {
        this.productClassificationMapper = productClassificationMapper;
    }

    @Override
    public List<ProductClassification> findAll(ProductClassificationSearchCriteria search) {
        return productClassificationMapper.findByType(search.getType());
    }

    @Override
    public ProductClassification findById(String id) {
        return productClassificationMapper.findById(id);
    }

    @Override
    public List<ProductClassification> findByParentId(String id) {
        return productClassificationMapper.findByParentId(id);
    }
}
