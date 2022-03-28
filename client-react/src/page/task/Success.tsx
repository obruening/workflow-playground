import { Link } from "react-router-dom";

function Success() {

    return (
        <article className="message is-success">
            <div className="message-header">
                <p>Success</p>
            </div>
            <div className="message-body">
                Task completed !


                <div style={{ marginTop: "20px" }}>
                    <Link className="button is-link is-success" to={"/"}>Take me to the Tasks</Link>
                </div>
            </div>
        </article>
    )
}

export default Success;