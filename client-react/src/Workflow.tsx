import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { CreateResult } from "./model/task/createResult";

function Workflow() {

    let auth = useAuth();
    let navigate = useNavigate();

    function create() {

        console.log("auth: " + auth.user?.id);

        axios.post<CreateResult>('/api/workflows', null, { headers: { "Fake-User": auth.user?.id || '' } })
            .then(response => {
                console.log(response.data);
                navigate('/tasks/' + response.data.taskId + '/' + response.data.taskName + '/edit');
            });
    }

    return (

        <div className="columns">
            <div className="column"></div>
            <div className="column is-three-quarters" >
                <div className="card is-centered">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Workflow "Dummy"</p>
                                <p className="subtitle is-6">Create a new workflow instance and edit the first user task as an assignee.</p>
                            </div>
                            <div className="media-right">
                                <button onClick={create} className="button is-success">Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column"></div>
        </div>
    )
}

export default Workflow;