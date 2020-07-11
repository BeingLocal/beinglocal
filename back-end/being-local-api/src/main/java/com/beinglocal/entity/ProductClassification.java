package com.beinglocal.entity;

import lombok.Data;

@Data
public class ProductClassification {

    private String id;
    private String name;
    private String type;
    private String parentId;
    private String commonName;
}
