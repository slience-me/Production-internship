package xyz.slienceme.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@MapperScan("xyz.slienceme.demo.mapper")
@SpringBootApplication
public class ProducePracticeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProducePracticeApplication.class, args);
    }

}
