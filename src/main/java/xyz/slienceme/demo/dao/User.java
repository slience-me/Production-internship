/**
 * @title UserMapper
 * @description produce-practice
 * @author slience_me
 * @version 1.0.0
 * @since 2022/9/16 20:22
 */
package xyz.slienceme.demo.dao;

import lombok.Data;

@Data
public class User {
    private Integer id;
    private String userName;
    private String passWord;
    private String realname;
    private Integer status;
}
