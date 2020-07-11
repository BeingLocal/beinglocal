package com.beinglocal.service.impl;

import com.beinglocal.dto.SearchDTO;
import com.beinglocal.entity.ProductClassification;
import com.beinglocal.persistence.ProductClassificationMapper;
import com.beinglocal.service.classification.SearchProductClassificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class SearchProductClassificationSearchImpl implements SearchProductClassificationService {

    @Autowired
    private ProductClassificationMapper productClassificationMapper;

    @Override
    public List<ProductClassification> findAll(SearchDTO search) {
        return productClassificationMapper.findAll(new HashMap<>(0));
    }
}
