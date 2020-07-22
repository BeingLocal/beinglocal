package com.beinglocal.service.classification;

import com.beinglocal.entity.ProductClassification;
import com.beinglocal.service.ISearchService;

import java.util.List;

public interface SearchProductClassificationService extends ISearchService<ProductClassification, String> {

    List<ProductClassification> findByParentId(String parentId);
}
