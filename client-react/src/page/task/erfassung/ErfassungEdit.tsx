import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { putTaskPayload, useFetchError } from "../../../apiOperations";
import { useAuth } from "../../../authContext";
import { Order } from "../../../model/task/order";
import { TaskContainer } from "../../../model/task/taskContainer";
import { Command } from "../Command";
import ErrorBox from "../ErrorBox";
import Header from "../Header";
import ErfassungForm from "./ErfassungForm";


function ErfassungEdit() {

    const { id } = useParams();
    const auth = useAuth();
    const navigate = useNavigate();
    const [ error, setError ] = useState<string | null>(null);

    const commandList: Array<Command> = [{buttonLabel: 'Complete Task', name: 'complete', options: {decision: "yes"}},
                                         {buttonLabel: 'Super Complete Task', name: 'super',  options: {decision: "no"}}];

    const { isPending, data: taskContainer } = useFetchError<TaskContainer>(`/api/tasks/${id}`, auth.user?.id || '', setError);

    const onSubmit: SubmitHandler<Order> = (order, event) => {

        const command = commandList.find(command => command.name === event?.target.name);
        order = {...order, ...command?.options};
        const taskPayload = { id: taskContainer?.taskProjection.id, order: order }

        putTaskPayload(taskPayload, auth.user?.id || '', setError);
    }


    return (
        <>
            {taskContainer?.taskProjection && <Header taskKey={taskContainer?.taskProjection} />}
            {error && <ErrorBox errorMessageKey="Ich bin ein Fehler !" />}
            {taskContainer?.order && <ErfassungForm order={taskContainer?.order} onSubmitFunc={onSubmit} commandList={commandList} />}
        </>
    )
}

export default ErfassungEdit;

