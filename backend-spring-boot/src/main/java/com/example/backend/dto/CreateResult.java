package com.example.backend.dto;

public class CreateResult {

    private String taskId;
    private String taskDefinitionKey;

    public CreateResult(String taskId, String taskDefinitionKey) {

        this.taskId = taskId;
        this.taskDefinitionKey = taskDefinitionKey;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskDefinitionKey() {
        return taskDefinitionKey;
    }

    public void setTaskDefinitionKey(String taskDefinitionKey) {
        this.taskDefinitionKey = taskDefinitionKey;
    }
}
