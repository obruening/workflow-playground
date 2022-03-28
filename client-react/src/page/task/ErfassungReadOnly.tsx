import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../authContext";
import { TaskContainer } from "../../model/task/taskContainer";
import Header from "./Header";
import ReadOnlyContainer from "./ReadOnlyContainer";

function ErfassungReadOnly() {

    const { id } = useParams();

    const [taskContainer, setTaskContainer] = useState<TaskContainer>();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get<TaskContainer>(`/api/tasks/${id}`, { headers: { "Fake-User": auth.user?.id || '' } })
            .then(response => {
                setTaskContainer(response.data);
                console.log(response.data);
            })
    }, [auth, id]);


    return (
        <div className="columns">
            <div className="column">
                <div className="box">
                    {taskContainer?.taskProjection && <Header taskKey={taskContainer?.taskProjection} />}
                    {taskContainer?.order && <ReadOnlyContainer order={taskContainer?.order} />}
                </div>
            </div>
        </div>
    )
}

export default ErfassungReadOnly;