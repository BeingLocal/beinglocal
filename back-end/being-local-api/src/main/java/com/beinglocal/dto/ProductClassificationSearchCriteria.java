package com.beinglocal.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class ProductClassificationSearchCriteria {
    private String type;
    private String name;

    public ProductClassificationSearchCriteria(String type, String name) {
        this.type = type;
        this.name = name;
    }
}
