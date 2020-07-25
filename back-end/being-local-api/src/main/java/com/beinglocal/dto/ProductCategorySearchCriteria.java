package com.beinglocal.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class ProductCategorySearchCriteria {
    private String type;
    private String name;

    public ProductCategorySearchCriteria(String type, String name) {
        this.type = type;
        this.name = name;
    }
}
