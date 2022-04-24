package com.example.backend.service;

import java.util.Collections;

import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.dto.CreateResult;
import com.example.backend.model.Item;
import com.example.backend.model.Order;

@Transactional
@Service
public class WorkflowService {

    private static Logger logger = LoggerFactory.getLogger(WorkflowService.class);

    @Autowired
    private OrderService orderService;

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;

    // only to have some processinstances and tasks to get started with
    public CreateResult createDemoProcessInstance(String user) {
        
        Order order = new Order();
        order.setDescription("Demo Order");

        Item item1 = new Item();
        item1.setProductName("First Item");
        item1.setProductNumber(1234L);
        item1.setOrder(order);

        Item item2 = new Item();
        item2.setProductName("Second Item");
        item2.setProductNumber(5678L);
        item2.setOrder(order);

        order.getItemList().add(item1);
        order.getItemList().add(item2);
        
        order = orderService.save(order);

        ProcessInstance processInstance = runtimeService
                .startProcessInstanceByKey("dummy_dummy", Collections.singletonMap("order", order));
        
        Task task = taskService
                .createTaskQuery()
                .processInstanceId(processInstance.getId())
                .singleResult();

        taskService.setAssignee(task.getId(), user);

        return new CreateResult(task.getId(), task.getTaskDefinitionKey());
    }
    
    public CreateResult create(String user) {

        Order order = new Order();
        order = orderService.save(order);

        ProcessInstance processInstance = runtimeService
                .startProcessInstanceByKey("dummy_dummy", Collections.singletonMap("order", order));

        Task task = taskService
                .createTaskQuery()
                .processInstanceId(processInstance.getId())
                .singleResult();

        taskService.setAssignee(task.getId(), user);

        return new CreateResult(task.getId(), task.getTaskDefinitionKey());

    }
}
