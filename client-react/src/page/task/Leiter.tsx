import { useParams } from "react-router-dom";

function Leiter() {
    
    const { id } = useParams();

    return (
        <div>
            Leiter: {id}
        </div>
    )
}

export default Leiter;