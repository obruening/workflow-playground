package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.model.Order;
import com.example.backend.model.OrderMerge;
import com.example.backend.repository.OrderRepository;

@Service
@Transactional
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order save(Order order) {

        order.getItemList().forEach(item -> item.setOrder(order));

        return orderRepository.save(order);
    }

    public List<Order> findAll() {

        return orderRepository.findAll();
    }

    public Optional<Order> findById(Long id) {

        return orderRepository.findById(id);
    }

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
