package com.example.backend;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import com.example.backend.model.primary.Item;
import com.example.backend.model.primary.Order;
import com.example.backend.service.primary.ItemService;
import com.fasterxml.jackson.core.JsonProcessingException;

@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
class BackendApplicationTests {
	
	@Autowired
    private TestRestTemplate restTemplate;
	
	@Autowired
	private ItemService itemService;
	
	private static Logger logger = LoggerFactory.getLogger(BackendApplicationTests.class);

	@Test
	void postOrder() throws JsonProcessingException {
		
		HttpHeaders headers = new HttpHeaders();
      
		Order order = new Order();
		order.setCustomerId(1111L);
		order.setDescription("ich bin eine order");
		Item item1 = new Item();
		item1.setProductName("ich bin ein item");
		
		
		Item item2= new Item();
		item2.setProductName("ich bin noch ein item");

		order.setItemList(Arrays.asList(item1, item2));

        logger.info(order.toJson());

		
 
        HttpEntity<Order> request = new HttpEntity<>(order, headers);
		
		ResponseEntity<Order> orderResponseEntity = restTemplate.postForEntity("/api/orders", request, Order.class);
		logger.info(orderResponseEntity.getBody().toJson());
		
		assertThat(orderResponseEntity.getBody().getId()).isNotNull();
		
		order = orderResponseEntity.getBody();
		order.getItemList().remove(0);
		
	    Item item3 = new Item();
	    item3.setProductName("ich bin item3");
	    item3.setProductNumber(999L);
	    
	    order.getItemList().add(item3);
		
		order.setDescription("ich bin eine geänderte order");
		
		
		
		HttpEntity<Order> updateRequest = new HttpEntity<>(order, headers);
		
		ResponseEntity<Order> updateOrderResponseEntity = restTemplate.postForEntity("/api/orders/update", updateRequest, Order.class);
		logger.info(updateOrderResponseEntity.getBody().toJson());
		
		itemService.findAll().forEach(item -> logger.info(item.getId() + " " + item.getProductName()));
		
	}

}
