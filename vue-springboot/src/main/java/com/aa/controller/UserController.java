package com.aa.controller;

import com.aa.entity.User;
import com.aa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController//方便日后使用前后端分离
@CrossOrigin//跨域
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    /*
     * 添加用户
     * */
    @PostMapping("add")
    public Map<String, Object> add(@RequestBody User user) {
        //！！注意axios发起的是JSON格式的，需要添加注解@RequestBody才能拿到数据
        HashMap<String, Object> map = new HashMap<>();
        try {
            userService.save(user);
            map.put("success", true);
            map.put("msg", "添加用户信息成功");
        } catch (Exception e) {
            e.printStackTrace();//打印异常信息
            map.put("success", false);
            map.put("msg", "添加用户失败:" + e.getMessage());
        }
        return map;
    }

    /*
     * 删除用户
     * */
    @GetMapping("delete")
    public Map<String, Object> delete(String id) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            userService.delete(id);
            map.put("success", true);
            map.put("msg", "删除用户信息成功");
        } catch (Exception e) {
            e.printStackTrace();//打印异常信息
            map.put("success", false);
            map.put("msg", "删除用户失败:" + e.getMessage());
        }
        return map;
    }

    /*
    * 查询一个用户
    * */
    @GetMapping("findOne")
    public User findOne(String id){
        return userService.findById(id);
    }

    /*
    * 更新用户
    * */
    @PostMapping("update")
    public  Map<String,Object> update(@RequestBody User user){
        userService.update(user);
        HashMap<String,Object> map=new HashMap<>();
        try {
            userService.update(user);
            map.put("success", true);
            map.put("msg", "更新用户信息成功");
        } catch (Exception e) {
            e.printStackTrace();//打印异常信息
            map.put("success", false);
            map.put("msg", "更新用户失败:" + e.getMessage());
        }
        return map;

    }

    /*
     * 查询所有开发
     * */

    @GetMapping("findAll")//严格按照前端rap2里面所定义的接口来写,包括后续的传参
    public Map<String, Object> findAll(Integer page, Integer rows) {
        Map<String, Object> map = new HashMap<>();
        List<User> results = userService.findAll();
        map.put("total", 10);
        map.put("totalPage", 1);
        map.put("page", page);
        map.put("results", results);
        return map;
    }
}
