package com.beinglocal.persistence;

import com.beinglocal.entity.ProductClassification;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@Mapper
public interface ProductClassificationMapper {

    @Select("SELECT mpc.id,\n" +
            "       mpc.name,\n" +
            "       mpc.TYPE,\n" +
            "       mpc.PARENT_ID as parentId,\n" +
            "       mpc.COMMON_NAME as commonName,\n" +
            "       mpc.CREATE_BY as createBy, mpc.CREATE_TIME as createTime,\n" +
            "       mpc.UPDATE_BY as updateBy, mpc.UPDATE_TIME as updateTime,\n" +
            "       mpc.IS_DELETED as isDeleted\n" +
            "FROM M_PRODUCT_CLASSIFICATION mpc WHERE mpc.TYPE = #{type}")
    List<ProductClassification> findByType(@Param("type") String type);

    @Select("SELECT mpc.id,\n" +
            "       mpc.name,\n" +
            "       mpc.TYPE,\n" +
            "       mpc.PARENT_ID as parentId,\n" +
            "       mpc.COMMON_NAME as commonName,\n" +
            "       mpc.CREATE_BY as createBy, mpc.CREATE_TIME as createTime,\n" +
            "       mpc.UPDATE_BY as updateBy, mpc.UPDATE_TIME as updateTime,\n" +
            "       mpc.IS_DELETED as isDeleted\n" +
            "FROM M_PRODUCT_CLASSIFICATION mpc WHERE mpc.ID = #{id}")
    ProductClassification findById(@Param("id") String id);

    @Select("SELECT mpc.id,\n" +
            "       mpc.name,\n" +
            "       mpc.TYPE,\n" +
            "       mpc.PARENT_ID as parentId,\n" +
            "       mpc.COMMON_NAME as commonName,\n" +
            "       mpc.CREATE_BY as createBy, mpc.CREATE_TIME as createTime,\n" +
            "       mpc.UPDATE_BY as updateBy, mpc.UPDATE_TIME as updateTime,\n" +
            "       mpc.IS_DELETED as isDeleted\n" +
            "FROM M_PRODUCT_CLASSIFICATION mpc WHERE mpc.PARENT_ID = #{parent_id} AND mpc.IS_DELETED=0")
    List<ProductClassification> findByParentId(@Param("parent_id") String parentId);
}
