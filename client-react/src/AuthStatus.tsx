import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

function AuthStatus() {

  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          Not logged in.
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-end">
      <div className="navbar-item">
        Welcome {auth.user.firstname} {auth.user.lastname}
      </div>
      <div className="navbar-item">
        <button className="button is-success"
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default AuthStatus;
