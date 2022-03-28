import { useParams } from "react-router-dom";

function LeiterReadOnly() {
    
    const { id } = useParams();

    return (
        <div>
            Leiter: {id}
        </div>
    )
}

export default LeiterReadOnly;