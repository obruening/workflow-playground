package com.example.backend.dto;

import com.example.backend.model.Order;

public class TaskContainer {

    private TaskProjection taskProjection;
    private Order order;

    public TaskContainer(TaskProjection taskProjection, Order order) {

        this.taskProjection = taskProjection;
        this.order = order;
    }

    public TaskProjection getTaskProjection() {
        return taskProjection;
    }

    public void setTaskProjection(TaskProjection taskProjection) {
        this.taskProjection = taskProjection;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

}
