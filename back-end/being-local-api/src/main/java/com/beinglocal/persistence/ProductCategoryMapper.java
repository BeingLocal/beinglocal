package com.beinglocal.persistence;

import com.beinglocal.entity.ProductCategory;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface ProductCategoryMapper {

    @Select("select ctg.ID as id, ctg.CODE as code, ctg.NAME as name,\n" +
            "       ctg.DESCRIPTION as description, ctg.SEARCH_INDEX as searchIndex,\n" +
            "       ctg.PARENT_ID as parentId, ctg.IS_DELETED as isDeleted,\n" +
            "       ctg.CREATE_TIME as createTime, ctg.CREATE_BY as createBy,\n" +
            "       ctg.UPDATE_TIME as updateTime, ctg.UPDATE_BY as updateBy\n" +
            "    from M_CATEGORY ctg\n" +
            "where ctg.ID = #{id}")
    ProductCategory findById(@Param("id") String id);

    @Select("select ctg.ID as id, ctg.CODE as code, ctg.NAME as name,\n" +
            "       ctg.DESCRIPTION as description, ctg.SEARCH_INDEX as searchIndex,\n" +
            "       ctg.PARENT_ID as parentId, ctg.IS_DELETED as isDeleted,\n" +
            "       ctg.CREATE_TIME as createTime, ctg.CREATE_BY as createBy,\n" +
            "       ctg.UPDATE_TIME as updateTime, ctg.UPDATE_BY as updateBy\n" +
            "from M_CATEGORY ctg\n" +
            "where ctg.PARENT_ID = #{parent_id}\n" +
            "and ctg.IS_DELETED = 0 order by ctg.name")
    @Results(value = {
        @Result(property = "parent", javaType = ProductCategory.class, column = "parentId",one = @One(select = "findById"))
    })
    List<ProductCategory> findByParentId(@Param("parent_id") String parentId);

    @Select("select ctg.ID as id, ctg.CODE as code, ctg.NAME as name,\n" +
            "       ctg.DESCRIPTION as description, ctg.SEARCH_INDEX as searchIndex,\n" +
            "       ctg.PARENT_ID as parentId, ctg.IS_DELETED as isDeleted,\n" +
            "       ctg.CREATE_TIME as createTime, ctg.CREATE_BY as createBy,\n" +
            "       ctg.UPDATE_TIME as updateTime, ctg.UPDATE_BY as updateBy\n" +
            "from M_CATEGORY ctg\n" +
            "where ctg.PARENT_ID is null\n" +
            "and ctg.IS_DELETED = 0 ORDER BY ctg.name")
    List<ProductCategory> findAllRootCategories();
}
