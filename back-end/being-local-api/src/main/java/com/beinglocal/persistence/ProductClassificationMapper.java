package com.beinglocal.persistence;

import com.beinglocal.entity.ProductClassification;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface ProductClassificationMapper {

    @Select("select * from M_PRODUCT_CLASSIFICATION where type = 'SEGMENT'")
    List<ProductClassification> findAll(Map<String, Object> map);
}
