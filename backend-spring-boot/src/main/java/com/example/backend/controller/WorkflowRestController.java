package com.example.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.CreateResult;
import com.example.backend.service.WorkflowService;

@RestController
@RequestMapping(value = "/api/workflows")
public class WorkflowRestController extends BaseController {

    private static Logger logger = LoggerFactory.getLogger(WorkflowRestController.class);

    @Autowired
    private WorkflowService workflowService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> create(@RequestHeader(name = "Fake-User", required = false) String fakeUser) {
        
        if (fakeUser == null) {
            return getUnautorizedResposeEntity();
        }

        CreateResult createResult = workflowService.create(fakeUser);

        return new ResponseEntity<CreateResult>(createResult, HttpStatus.OK);
    }
}
