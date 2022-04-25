package com.example.backend.service;

import org.camunda.bpm.engine.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.dto.TaskAssign;
import com.example.backend.dto.TaskPayload;
import com.example.backend.model.Order;

@Transactional
@Service
public class TaskApiService {
    
    @Autowired
    private OrderService orderService;
    
    @Autowired
    private TaskService taskService;

    public void complete(TaskPayload taskPayload) {

        String id = taskPayload.getId();
        Order order = taskPayload.getOrder();
        orderService.merge(order);
        taskService.complete(id);
    }
    
    public void assign(TaskAssign taskAssign) {
        taskService.setAssignee(taskAssign.getTaskId(), taskAssign.getUserName());
    }

}
