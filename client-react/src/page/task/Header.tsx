import { Task } from "../../model/task/task";

export interface HeaderProps {
    taskKey: Task;
}

function Header(headerProps: HeaderProps) {

    return (

        <article className="message  is-info">
            <div className="message-body">
                <div className="content">
                    <h5>
                        Process Definition "{headerProps.taskKey.processDefinitionName}" &#8211;
                        Process Instance {headerProps.taskKey.processInstanceId}
                    </h5>
                    <p>{headerProps.taskKey.assignee ?
                        `The User Task "${headerProps.taskKey.name}" is assigned to "${headerProps.taskKey.assignee}"` :
                        `The User Task "${headerProps.taskKey.name}" is not assigned.`}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Header;