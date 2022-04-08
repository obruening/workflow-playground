import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../../authContext";
import Box from "../../../Box";
import { TaskContainer } from "../../../model/task/taskContainer";
import useFetch from "../../../useFetch";
import ErrorBox from "../ErrorBox";
import Header from "../Header";
import ReadOnlyContainer from "../ReadOnlyContainer";

function ErfassungReadOnly() {

    const { id } = useParams();
    const auth = useAuth();
    const { error, isPending, data: taskContainer } = useFetch<TaskContainer>(`/api/tasks/${id}`, auth.user?.id || '');

    return (
        <>
            {error && <ErrorBox errorMessageKey={JSON.stringify(error, null, 4)} />}
            {isPending && <div>Loading...</div>}
            {taskContainer?.taskProjection && <Header taskKey={taskContainer?.taskProjection} />}
            {taskContainer?.order && <ReadOnlyContainer order={taskContainer?.order} />}

            {taskContainer?.taskProjection &&
                <Box>
                    <div className="field is-grouped">
                        <div className="control">
                            <Link className="button is-link" to={"/"}>Back</Link>
                        </div>
                        <div className="control">
                            <Link
                                className="button is-success"
                                to={`/tasks/${id}/${taskContainer?.taskProjection.taskDefinitionKey}/edit`}>
                                Edit
                            </Link>
                        </div>
                    </div>
                </Box>}
        </>
    )
}

export default ErfassungReadOnly;