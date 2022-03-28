import { Order } from "../../model/task/order";

function FormResult(formResultProps: FormResultProps) {
    return (

        <pre style={{ marginTop: "20px" }}>
            {JSON.stringify(formResultProps.order, null, 4)}
        </pre>
    )
}

export type FormResultProps = {
    order?: Order;
}

export default FormResult;