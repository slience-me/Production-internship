package xyz.slienceme.demo.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.slienceme.demo.dao.User;
import xyz.slienceme.demo.mapper.UserMapper;
import xyz.slienceme.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(String userName, String passWord) {
        return userMapper.selectUser(userName, passWord);
    }

    @Override
    public void updateById(Integer Id ,int i) {
        userMapper.updateById(Id, i);
    }

    @Override
    public User getStatus(Integer Id) {
        return userMapper.getStatus(Id);
    }
}
