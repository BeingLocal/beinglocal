package com.beinglocal.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class ProductCategoryDTO extends BaseDTO {
    private String code;
    private String name;
    private String description;
    private int isSystem;
    private int isActive;
    private String searchIndex;
    private ProductCategoryDTO parent;
}
