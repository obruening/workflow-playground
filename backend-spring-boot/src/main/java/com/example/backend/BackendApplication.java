package com.example.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.backend.service.primary.WorkflowService;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
	
	@Autowired
	private WorkflowService workflowService; 
	
	private static Logger logger = LoggerFactory.getLogger(BackendApplication.class);
		
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		for (int i = 0; i < 10; i++) {
			
			workflowService.create("anna");
		}
	}
}
