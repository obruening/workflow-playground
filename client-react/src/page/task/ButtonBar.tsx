import { Link } from "react-router-dom";

function ButtonBar() {

    return (

        <div className="field is-grouped">
            <div className="control">
                <input type="submit" className="button is-link" value="Submit" />
            </div>
            <div className="control">
                <Link className="button is-link is-light" to={"/"}>Cancel</Link>
            </div>
        </div>
    )
}

export default ButtonBar;