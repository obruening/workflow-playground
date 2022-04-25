package com.example.backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.camunda.bpm.engine.RepositoryService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.repository.ProcessDefinition;
import org.camunda.bpm.engine.task.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.User;
import com.example.backend.dto.TaskAssign;
import com.example.backend.dto.TaskContainer;
import com.example.backend.dto.TaskPayload;
import com.example.backend.dto.TaskProjection;
import com.example.backend.model.Order;
import com.example.backend.service.TaskApiService;
import com.example.backend.service.UserService;

@RestController
@RequestMapping(value = "/api/tasks")
public class TaskRestController extends BaseController {

    private static Logger logger = LoggerFactory.getLogger(TaskRestController.class);

    @Autowired
    private TaskService taskService;

    @Autowired
    private RepositoryService repositoryService;

    @Autowired
    private TaskApiService taskApiService;
    
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> tasks(@RequestHeader(name = "Fake-User", required = false) String fakeUser) {

        if (fakeUser == null) {
            return getUnautorizedResposeEntity();
        }

        User user = userService.getUser(fakeUser);
        List<String> groupList = user.getGroupList().stream().map(g -> g.getName()).collect(Collectors.toList());

        List<Task> tasks = taskService
        		.createTaskQuery()
        		.or()
        		.taskAssignee(fakeUser)
        		.taskCandidateGroupIn(groupList)
                .includeAssignedTasks()
                .endOr()
                .orderByTaskCreateTime()
                .desc()
                .list();

        List<TaskProjection> taskProjectionList = tasks
                .stream()
                .map(TaskProjection::mapToTaskProjection)
                .collect(Collectors.toList());

        return new ResponseEntity<List<TaskProjection>>(taskProjectionList, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> task(@PathVariable("id") String id,
            @RequestHeader(name = "Fake-User", required = false) String fakeUser) {
        
        if (fakeUser == null) {
            return getUnautorizedResposeEntity();
        }

        Task task = taskService.createTaskQuery().taskId(id).singleResult();
        TaskProjection taskProjection = TaskProjection.mapToTaskProjection(task);
        

        Order order = (Order) taskService.getVariable(task.getId(), "order");

        ProcessDefinition processDefinition = repositoryService
                .createProcessDefinitionQuery()
                .processDefinitionId(task.getProcessDefinitionId())
                .singleResult();

        taskProjection.setProcessDefinitionName(processDefinition.getName());

        TaskContainer taskContainer = new TaskContainer(taskProjection, order);

        return new ResponseEntity<TaskContainer>(taskContainer, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> complete(@RequestBody TaskPayload taskPayload,
            @RequestHeader(name = "Fake-User", required = false) String fakeUser) {
        
        if (fakeUser == null) {
            return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }

        taskApiService.complete(taskPayload);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
