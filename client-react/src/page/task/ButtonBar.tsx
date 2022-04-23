import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { Link } from "react-router-dom";
import Box from "../../Box";
import { Order } from "../../model/task/order";
import { Command } from "./Command";

function ButtonBar({handleSubmit, onSubmitFunc, commandList}: ButtonBarProps) {

    return (

        <Box>
            <div className="field is-grouped">
                <div className="control">
                    <Link className="button is-link" to={"/"}>Cancel</Link>
                </div>
                {commandList.map(command => {
                    return (
                        <div key={command.name} className="control">
                            <button onClick={handleSubmit(onSubmitFunc)} name={command.name} className="button is-success">
                                {command.buttonLabel}
                            </button>
                        </div>
                    )
                })}
            </div>
        </Box>
    )
}


export type ButtonBarProps = {
    commandList: Array<Command>;
    onSubmitFunc: SubmitHandler<Order>;
    handleSubmit: UseFormHandleSubmit<Order>;
}

export default ButtonBar;