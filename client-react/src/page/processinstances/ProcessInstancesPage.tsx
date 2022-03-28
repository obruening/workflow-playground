import { useParams } from "react-router-dom";

function ProcessInstancesPage() {
    
    const { id } = useParams();

    return (
        <div>
            ProcessInstances
        </div>
    )
}

export default ProcessInstancesPage;