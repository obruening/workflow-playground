import { Link, Outlet, useLocation } from "react-router-dom";

function getActive(predicates: Array<boolean>) {

    return predicates.filter(p => p === true).length > 0 ? 'is-active' : ''
}

function Menu() {
    const location = useLocation();

    return (
        <>
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="tabs is-centered" style={{ paddingTop: "20px" }}>
                        <ul>
                            <li className={getActive([location.pathname ==='/workflow'])}><Link to="/workflow">Workflow</Link></li>
                            <li className={getActive([location.pathname === '/', location.pathname.startsWith('/task')]) }><Link to="/">Tasks</Link></li>
                            <li className={getActive([location.pathname === '/form'])}><Link to="/form">Form Hook Example</Link></li>
                        </ul>
                    </div>

                    <Outlet />


                </div>
            </div>
        </>
    )
}

export default Menu;