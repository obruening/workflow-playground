package com.example.backend.dto;

public class CreateResult {

    private String taskId;
    private String taskName;

    public CreateResult(String taskId, String taskName) {

        this.taskId = taskId;
        this.taskName = taskName;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}
