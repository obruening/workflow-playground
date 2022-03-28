import { Link } from "react-router-dom";
import { useAuth } from "../../authContext";
import { Task } from "../../model/task/task";
import useFetch from "../../useFetch";

function TasksPage() {

    const auth = useAuth();

    const { error, isPending, data: taskList } = useFetch<Array<Task>>('/api/tasks', auth.user?.id || '');

    return (
        <>
          { error && <pre style={{ marginTop: "20px" }}>
                    {JSON.stringify(error, null, 4)}
                </pre> }
          { isPending && <div>Loading...</div> }
          { taskList &&
        
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>ProcInstId</th>
                    <th>TaskName</th>
                    <th>Assignee</th>
                    <th>CreateTime</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {taskList.map(task => {
                    return (
                        <tr>
                            <td>{task.processInstanceId}</td>
                            <td>{task.name}</td>
                            <td>{task.assignee}</td>
                            <td>{task.createTime}</td>
                            <td>
                                <Link to={`tasks/${task.id}/${task.taskDefinitionKey}`}>Show</Link>&nbsp;|&nbsp;
                                <Link to={`tasks/${task.id}/${task.taskDefinitionKey}/edit`}>Edit</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table> }
        </>
    );
}

export default TasksPage;