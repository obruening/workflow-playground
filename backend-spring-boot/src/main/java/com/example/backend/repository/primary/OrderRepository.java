package com.example.backend.repository.primary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.primary.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}


