import { Control, FormState, UseFormRegister } from "react-hook-form";
import Box from "../../../Box";
import { Order } from "../../../model/task/order";

function OrderForm(orderFormProps: OrderFormProps) {

    return (
        <Box>
            <div className="content">
                <h4 className="h4">Order</h4>
            </div>

            <div className="field">
                <label className="label" htmlFor="description">Description</label>
                <div className="control">
                    <input id="description" style={{ "width": "70%" }} className="input" defaultValue="test" {...orderFormProps.register("description")} />
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="customerId">Customer Id</label>
                <div className="control">
                    <input id="customerId" style={{ "width": "70%" }} className="input" {...orderFormProps.register("customerId", { required: true })} />
                </div>
                {orderFormProps.formState.errors.customerId && <p className="help is-danger">This field is required</p>}
            </div>
        </Box>
    )
}

export type OrderFormProps = {
    control?: Control<Order, any>;
    register: UseFormRegister<Order>;
    formState: FormState<Order>; 
}

export default OrderForm;