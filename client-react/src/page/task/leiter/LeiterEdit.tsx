import { useParams } from "react-router-dom";

function LeiterEdit() {
    
    const { id } = useParams();

    return (
        <div>
            Leiter: {id}
        </div>
    )
}

export default LeiterEdit;