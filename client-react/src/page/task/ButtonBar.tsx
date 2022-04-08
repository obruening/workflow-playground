import { Link } from "react-router-dom";
import Box from "../../Box";

function ButtonBar() {

    return (

        <Box>
            <div className="field is-grouped">
                <div className="control">
                    <Link className="button is-link" to={"/"}>Cancel</Link>
                </div>
                <div className="control">
                    <input type="submit" className="button is-success" value="Complete Task" />
                </div>
            </div>
        </Box>
    )
}

export default ButtonBar;