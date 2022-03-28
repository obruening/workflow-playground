package com.example.backend.service.primary;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.model.primary.Order;
import com.example.backend.model.primary.OrderMerge;
import com.example.backend.repository.primary.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Transactional("primaryTransactionManager")
	public Order save(Order order) {
		
		order.getItemList().forEach(item -> item.setOrder(order));
		
		return orderRepository.save(order);
	}

	@Transactional("primaryTransactionManager")
	public List<Order> findAll() {
		
		return orderRepository.findAll();
	}

	@Transactional("primaryTransactionManager")
	public Optional<Order> findById(Long id) {
		
		return orderRepository.findById(id);
	}
	
	
	@Transactional("primaryTransactionManager")
	public Order merge(Order order) {
		
		if (order.getId() != null) {
			
			Order persistedOrder = findById(order.getId()).orElseThrow();
			persistedOrder = OrderMerge.mergeSimpleAttributes(order, persistedOrder);
			persistedOrder = OrderMerge.mergeItems(order, persistedOrder);
			return orderRepository.save(persistedOrder);
    	}
		
		// wenn die id null ist, dann ist es kein merge, something is wrong
		return null;
	}
}
