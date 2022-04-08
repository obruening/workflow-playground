import { SubmitHandler, useForm } from "react-hook-form";
import Box from "../../../Box";
import { Order } from "../../../model/task/order";
import ButtonBar from "../ButtonBar";
import ItemsForm from "../form/ItemsForm";
import OrderForm from "../form/OrderForm";


// https://codesandbox.io/s/ji8fv?file=/src/App.tsx

function ErfassungForm(erfassungFormProps: ErfassungFormProps) {

    //let auth = useAuth();

    //const [formData, setFormData] = React.useState<Inputs>({ example: "example", exampleRequired: "exampleRequired", books: [{ title: "xtitle", author: "xauthor" }] });
    //const [formData, setFormData] = React.useState<Order>();

    let formData = erfassungFormProps.order;

    const { control, register, handleSubmit, watch, formState } = useForm<Order>({ defaultValues: formData });

    return (
        <>
            <form onSubmit={handleSubmit(erfassungFormProps.onSubmitFunc)}>
                <OrderForm register={register} control={control} formState={formState} />
                <ItemsForm register={register} control={control} formState={formState} />
                <ButtonBar />
            </form>
        </>
    );
}

export type ErfassungFormProps = {
    order?: Order;
    onSubmitFunc: SubmitHandler<Order>;
}

export default ErfassungForm;