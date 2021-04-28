package com.juanorta.dockerpractice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableJpaRepositories(basePackages = {""})
public class DockerPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockerPracticeApplication.class, args);
	}

}

