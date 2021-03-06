package com.example.backend.dto;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.camunda.bpm.engine.history.HistoricProcessInstance;

public class ProcessinstanceProjection {

    private String id;
    private Date startTime;
    private Date endTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStartTime() {
        if (startTime != null) {
            DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
            return dateFormat.format(startTime);
        } else {
            return "";
        }
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {

        if (endTime != null) {
            DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
            return dateFormat.format(endTime);
        } else {
            return "";
        }
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }
    
    public static ProcessinstanceProjection mapToProcessInstanceProjection(HistoricProcessInstance historicProcessInstance) {
        
        ProcessinstanceProjection processinstanceProjection = new ProcessinstanceProjection();
        processinstanceProjection.setId(historicProcessInstance.getId());
        processinstanceProjection.setStartTime(historicProcessInstance.getStartTime());
        processinstanceProjection.setEndTime(historicProcessInstance.getEndTime());

        return processinstanceProjection;
    }

}
