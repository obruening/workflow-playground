import { Link, Outlet, useLocation } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function Layout() {

    const location = useLocation();

    return (
        <div>

            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <div className="navbar-item is-size-5" style={{ "fontWeight": "600" }}>Workflow Playground</div>


                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">

                        <a className="navbar-item" href="http://localhost:6060/h2-console" target="_blank" rel="noreferrer">
                            H2 Console
                        </a>


                        <a className="navbar-item" href="https://github.com/obruening" target="_blank" rel="noreferrer">
                            Documentation
                        </a>
                    </div>
                </div>

                <AuthStatus />

            </nav>


            <Outlet />

        </div>
    );
}

export default Layout;