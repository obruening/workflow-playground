export interface Task {
    id: string;
	taskDefinitionKey: string;
	name: string;
	assignee: string;
	processInstanceId: string
	createTime: string;
	processDefinitionName: string;
}

