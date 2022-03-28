import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuth } from "../../authContext";
import { Order } from "../../model/task/order";
import { TaskContainer } from "../../model/task/taskContainer";
import ErfassungForm from "./ErfassungForm";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function ErfassungEdit() {

    const { id } = useParams();

    const [taskContainer, setTaskContainer] = useState<TaskContainer>();
    const auth = useAuth();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Order> = order => {

        const taskPayload = { id: taskContainer?.taskProjection.id, order: order }
        console.log(taskPayload);


        axios.put<Order>('/api/tasks', taskPayload, { headers: { "Fake-User": auth.user?.id || '' } })
            .then(response => {
                console.log(response.data);
                navigate('/success');
            });
    }

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
                    {taskContainer?.order && <ErfassungForm order={taskContainer?.order} onSubmitFunc={onSubmit} />}
                </div>
            </div>
        </div>
    )
}

export default ErfassungEdit;