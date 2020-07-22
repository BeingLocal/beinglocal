package com.beinglocal.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {
    protected String id;
    protected Date createTime;
    protected Date updateTime;
    protected String updateBy;
    protected String createBy;
    protected int isDeleted;
}
