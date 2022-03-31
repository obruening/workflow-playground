import { Task } from "../../model/task/task";

export interface HeaderProps {
    taskKey: Task;
}

function Header(headerProps: HeaderProps) {

    return (

                <div className="content">
                    <h3>{headerProps.taskKey.assignee ?
                        `The User Task "${headerProps.taskKey.name}" is assigned to "${headerProps.taskKey.assignee}"` :
                        `The User Task "${headerProps.taskKey.name}" is not assigned.`} 
                    </h3>

                    <h5>
                        Process Definition "{headerProps.taskKey.processDefinitionName}" &#8211;
                        Process Instance {headerProps.taskKey.processInstanceId}
                    </h5>

                    <hr/>
                </div>
        
    )
}

export default Header;
