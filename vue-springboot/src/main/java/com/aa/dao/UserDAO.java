package com.aa.dao;

import com.aa.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper//让springboot扫描DAO接口所在的包
public interface UserDAO {

    void save(User user);

    void update(User user);

    void delete(String id);

    List<User> findAll();

    User findById(String id);
}
