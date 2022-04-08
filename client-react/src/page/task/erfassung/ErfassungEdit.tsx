import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../authContext";
import { Order } from "../../../model/task/order";
import { TaskContainer } from "../../../model/task/taskContainer";
import ErfassungForm from "./ErfassungForm";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import ErrorBox from "../ErrorBox";
import Box from "../../../Box";

function ErfassungEdit() {

    const { id } = useParams();

    const [taskContainer, setTaskContainer] = useState<TaskContainer>();
    const auth = useAuth();
    const navigate = useNavigate();
    const error = true;

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
        <>
            {taskContainer?.taskProjection && <Header taskKey={taskContainer?.taskProjection} />}

            {/*
            {error && <ErrorBox errorMessageKey="Ich bin ein Fehler !" />}
            */}
            
            {taskContainer?.order && <ErfassungForm order={taskContainer?.order} onSubmitFunc={onSubmit} />}

        </>
    )
}

export default ErfassungEdit;