import { Link } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function PublicPage() {
    return (
        <div>
            <h3>Public</h3>
            <AuthStatus />
            <Link to="/">Protected Page</Link>
        </div>
    );
}

export default PublicPage;