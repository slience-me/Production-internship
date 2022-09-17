package xyz.slienceme.demo.service;


import xyz.slienceme.demo.dao.User;

/**
 * Service 的CRUD也不用写了
 */
public interface UserService {

    User login(String userName, String passWord);

    void updateById(Integer Id, int i);

    User getStatus(Integer Id);
}
