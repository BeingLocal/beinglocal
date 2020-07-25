package com.beinglocal.entity;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
public class ProductClassification extends BaseEntity {
    private String name;
    private String type;
    private String parentId;
    private String commonName;
    public enum Type{
        SEGMENT("S","SEGMENT", 1),
        FAMILY("F", "FAMILY", 2),
        CLASS("C", "CLASS", 3),
        BRICK("B", "BRICK", 4);
        private String id;
        private String text;
        private int level;
        Type(String id, String text, int level) {
            this.id = id;
            this.text = text;
            this.level = level;
        }
        public String id() {
            return this.id;
        }

        public String text() {
            return this.text;
        }

        public int level() {
            return this.level;
        }
    }

    @Builder
    public ProductClassification(String id, Date createTime, Date updateTime, String updateBy,
                                 String createBy, int isDeleted, String name, String type, String parentId,
                                 String commonName) {
        super(id, createTime, updateTime, updateBy, createBy, isDeleted);
        this.name = name;
        this.type = type;
        this.parentId = parentId;
        this.commonName = commonName;
    }

    public ProductClassification(ProductClassification other) {
        super(other.getId(),
              other.getCreateTime(),
              other.getUpdateTime(),
              other.getUpdateBy(),
              other.getCreateBy(),
              other.getIsDeleted());
        this.name = other.name;
        this.type = other.type;
        this.parentId = other.parentId;
        this.commonName = other.commonName;
    }

}
