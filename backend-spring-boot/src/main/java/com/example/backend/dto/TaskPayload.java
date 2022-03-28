package com.example.backend.dto;

import com.example.backend.model.primary.Order;

public class TaskPayload {

    private String id;

    private Order order;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

}
