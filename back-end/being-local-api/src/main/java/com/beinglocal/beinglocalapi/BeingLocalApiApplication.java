package com.beinglocal.beinglocalapi;

import com.beinglocal.persistence.ProductClassificationMapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.beinglocal.*"})
@MapperScan(basePackages = {"com.beinglocal.persistence"})
@SpringBootApplication
public class BeingLocalApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeingLocalApiApplication.class, args);
	}

}
