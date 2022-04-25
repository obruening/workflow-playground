package com.example.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.TaskAssign;
import com.example.backend.service.TaskApiService;

@RestController
@RequestMapping(value = "/api/taskassign")
public class TaskAssignRestController extends BaseController {

    private static Logger logger = LoggerFactory.getLogger(TaskAssignRestController.class);

    @Autowired
    private TaskApiService taskApiService;

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> assign(@RequestBody TaskAssign taskAssign,
            @RequestHeader(name = "Fake-User", required = false) String fakeUser) {
        
        if (fakeUser == null) {
            return new ResponseEntity<String>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }

        taskApiService.assign(taskAssign);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
