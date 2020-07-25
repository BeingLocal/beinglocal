package com.beinglocal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseDTO {
    protected String id;
    protected Date createTime;
    protected Date updateTime;
    protected String updateBy;
    protected String createBy;
    protected int isDeleted;
}
