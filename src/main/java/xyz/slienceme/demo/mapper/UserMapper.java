package xyz.slienceme.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import xyz.slienceme.demo.dao.User;

@Mapper
public interface UserMapper {

    User selectUser(String userName, String passWord);

    void updateById(Integer Id, int i);

    User getStatus(Integer Id);
}
