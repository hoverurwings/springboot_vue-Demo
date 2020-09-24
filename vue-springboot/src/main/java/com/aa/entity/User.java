package com.aa.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Accessors(chain=true)//链式调用
public class User {
    private String id;
    private String name;
    private Integer age;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "GTM+8")//加注解以正确展示时间
    private Date bir;
}
