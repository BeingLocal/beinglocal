package com.beinglocal.service;

import com.beinglocal.dto.ProductClassificationSearchCriteria;
import com.beinglocal.dto.SearchCriteria;

import java.util.ArrayList;
import java.util.List;

public interface ISearchService<E, K, SearchCriteria> {

    default E findById(K id){
        return null;
    }

    default List<E> findAll(SearchCriteria search){
        return new ArrayList<>(0);
    }

}

