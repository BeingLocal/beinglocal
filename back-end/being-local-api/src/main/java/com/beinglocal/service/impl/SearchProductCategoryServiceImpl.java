package com.beinglocal.service.impl;

import com.beinglocal.dto.ProductCategorySearchCriteria;
import com.beinglocal.entity.ProductCategory;
import com.beinglocal.persistence.ProductCategoryMapper;
import com.beinglocal.service.classification.SearchProductCategoryService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchProductCategoryServiceImpl implements SearchProductCategoryService {

    private ProductCategoryMapper mapper;

    @Autowired
    public SearchProductCategoryServiceImpl(ProductCategoryMapper mapper) {
        this.mapper = mapper;
    }

    @Override
    public List<ProductCategory> findByParentId(String parentId) {
        List<ProductCategory> byParentId;
        if(StringUtils.isEmpty(parentId) || StringUtils.isBlank(parentId)) {
            byParentId = mapper.findAllRootCategories();
        } else {
            byParentId = mapper.findByParentId(parentId);
        }
        return byParentId == null ? new ArrayList<>(0) : byParentId;
    }

    @Override
    public ProductCategory findById(String id) {
        final ProductCategory byId = mapper.findById(id);
        return byId;
    }

    @Override
    public List<ProductCategory> findAll(ProductCategorySearchCriteria search) {
        return null;
    }
}
