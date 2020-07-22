package com.beinglocal.service;

import com.beinglocal.dto.ProductClassificationSearchCriteria;

import java.util.ArrayList;
import java.util.List;

public interface ISearchService<E, K> {

    default E findById(K id){
        return null;
    }

    default List<E> findAll(ProductClassificationSearchCriteria search){
        return new ArrayList<>(0);
    }

}

