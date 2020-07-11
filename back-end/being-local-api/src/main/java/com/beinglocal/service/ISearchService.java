package com.beinglocal.service;

import com.beinglocal.dto.SearchDTO;

import java.util.ArrayList;
import java.util.List;

public interface ISearchService<E, K> {

    default E findById(K id){
        return null;
    }

    default List<E> findAll(SearchDTO search){
        return new ArrayList<>(0);
    }

}

