/**
 * @title IndexController
 * @description production-practice
 * @author slience_me
 * @version 1.0.0
 * @since 2022/9/16 10:44
 */
package xyz.slienceme.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import xyz.slienceme.demo.dao.User;
import xyz.slienceme.demo.service.UserService;
import xyz.slienceme.demo.util.HttpUtil;
import org.apache.http.NameValuePair;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@Controller
public class IndexController {

    @Autowired
    private UserService userService;

    @GetMapping("/index")
    public String Index() {
        return "index";
    }

    @GetMapping("/about")
    public String About() {
        return "about";
    }

    @GetMapping("/plant")
    public String Plant() {
        return "plant";
    }

    @GetMapping("/face")
    public String Face() {
        return "face";
    }

    @GetMapping("/login")
    public String Login() {
        return "login";
    }

//    @GetMapping("/getStatus")
//    @ResponseBody
//    public HashMap<String, String> GetStatus(Integer Id) {
//        User user = userService.getStatus(Id);
//        HashMap<String, String> data = new HashMap<>();
//        if (user.getStatus() == 1) {
//            data.put("user", user.getRealname());
//            return data;
//        } else {
//            return data;
//        }
//
//    }

    @PostMapping("/login")
    @ResponseBody
    public HashMap<String, String> LoginIn(@RequestParam String userName, String passWord) {
        System.out.println("userName = " + userName);
        System.out.println("passWord = " + passWord);
        HashMap<String, String> data = new HashMap<>();
        if (userName == null || passWord == null) {
            data.put("code", "1");
            data.put("msg", "登录失败！");
            return data;
        } else {
            User user = userService.login(userName, passWord);
            System.out.println(user);

            if (Objects.isNull(user)) {
                data.put("code", "1");
                data.put("msg", "登录失败！");

                return data;
            } else {
                userService.updateById(user.getId(), 1);
                Integer Id = user.getId();
                data.put("code", "0");
                data.put("msg", "登录成功！");
                data.put("userId", String.valueOf(Id));
                data.put("user",user.getRealname());
                return data;
            }
        }

    }

    @RequestMapping(value="/getResult",method=RequestMethod.POST)
    @ResponseBody
    public String getResult(String fileUrl){
        String url  = "http://ai.shangyuninfo.com/api/flowers/identification/processImageByUrl/";
        // 请求参数
        Object[] params = {"fileUrl"};
        Object[] values = {fileUrl};
        // 封装为对象
        List<NameValuePair> paramsList = HttpUtil.getParams(params, values);

        // 发送请求
        try {
            Object result =	HttpUtil.sendPost(url, paramsList);
            // 返回识别结果
            return result.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    @RequestMapping(value="/getResultface",method=RequestMethod.POST)
    @ResponseBody
    public String getResultface(String fileUrl){
        String url  = "http://ai.shangyuninfo.com/api/face/detect/processImageByUrl/";
        // 请求参数
        Object[] params = {"fileUrl"};
        Object[] values = {fileUrl};
        // 封装为对象
        List<NameValuePair> paramsList = HttpUtil.getParams(params, values);

        // 发送请求
        try {
            Object result =	HttpUtil.sendPost(url, paramsList);
            // 返回识别结果
            return result.toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }
}
