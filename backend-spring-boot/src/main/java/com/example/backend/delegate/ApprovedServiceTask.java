package com.example.backend.delegate;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ApprovedServiceTask implements JavaDelegate{
    
    private static Logger logger = LoggerFactory.getLogger(ApprovedServiceTask.class);

    @Override
    public void execute(DelegateExecution execution) throws Exception {
        
        logger.info("Approved!");
    }
}
