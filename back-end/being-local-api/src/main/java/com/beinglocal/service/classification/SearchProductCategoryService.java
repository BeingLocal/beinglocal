package com.beinglocal.service.classification;

import com.beinglocal.dto.ProductCategorySearchCriteria;
import com.beinglocal.entity.ProductCategory;
import com.beinglocal.entity.ProductClassification;
import com.beinglocal.service.ISearchService;

import java.util.List;

public interface SearchProductCategoryService extends ISearchService<ProductCategory, String, ProductCategorySearchCriteria> {

    List<ProductCategory> findByParentId(String parentId);
}
