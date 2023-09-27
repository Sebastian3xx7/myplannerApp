package com.example.myplannerApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MyplannerAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyplannerAppApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "bebe";
	}

}
