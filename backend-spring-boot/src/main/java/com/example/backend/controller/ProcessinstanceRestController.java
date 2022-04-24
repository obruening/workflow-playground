package com.example.backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.history.HistoricProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.ProcessinstanceProjection;

@RestController
@RequestMapping(value = "/api/processinstances")
public class ProcessinstanceRestController extends BaseController {
    
    @Autowired
    private HistoryService historyService;
    
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> processinstances(@RequestHeader(name = "Fake-User", required = false) String fakeUser) {
        
        if (fakeUser == null) {
            return getUnautorizedResposeEntity();
        }
        
        List<HistoricProcessInstance> processinstances = historyService
            .createHistoricProcessInstanceQuery()
            .orderByProcessInstanceStartTime()
            .desc()
            .list();
        
        List<ProcessinstanceProjection> processinstanceProjectionList = processinstances
                .stream()
                .map(ProcessinstanceProjection::mapToProcessInstanceProjection)
                .collect(Collectors.toList());
        
        return new ResponseEntity<List<ProcessinstanceProjection>>(processinstanceProjectionList, HttpStatus.OK);
    }
    
}
