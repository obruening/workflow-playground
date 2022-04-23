import { SubmitHandler, useForm } from "react-hook-form";
import Box from "../../../Box";
import { Order } from "../../../model/task/order";
import ButtonBar from "../ButtonBar";
import { Command } from "../Command";
import ItemsForm from "../form/ItemsForm";
import OrderForm from "../form/OrderForm";

function ErfassungForm(erfassungFormProps: ErfassungFormProps) {

    let formData = erfassungFormProps.order;

    const { control, register, handleSubmit, watch, formState } = useForm<Order>({ defaultValues: formData });

    return (
        <>
            <form>
                <OrderForm register={register} control={control} formState={formState} />
                <ItemsForm register={register} control={control} formState={formState} />
                <ButtonBar handleSubmit={handleSubmit} commandList={erfassungFormProps.commandList} onSubmitFunc={erfassungFormProps.onSubmitFunc} />
            </form>
        </>
    );
}

export type ErfassungFormProps = {
    order?: Order;
    onSubmitFunc: SubmitHandler<Order>;
    commandList: Array<Command>;
}

export default ErfassungForm;