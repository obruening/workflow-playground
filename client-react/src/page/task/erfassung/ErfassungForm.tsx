import { SubmitHandler, useForm } from "react-hook-form";
import { Order } from "../../../model/task/order";
import ButtonBar from "../ButtonBar";
import Items from "../Items";


// https://codesandbox.io/s/ji8fv?file=/src/App.tsx

function ErfassungForm(erfassungFormProps: ErfassungFormProps) {

    //let auth = useAuth();

    //const [formData, setFormData] = React.useState<Inputs>({ example: "example", exampleRequired: "exampleRequired", books: [{ title: "xtitle", author: "xauthor" }] });
    //const [formData, setFormData] = React.useState<Order>();

    let formData = erfassungFormProps.order;

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Order>({ defaultValues: formData });

    return (
        <>
            <form onSubmit={handleSubmit(erfassungFormProps.onSubmitFunc)}>

                <div className="field">
                    <label className="label" htmlFor="description">Description</label>
                    <div className="control">
                        <input id="description" style={{"width": "70%"}} className="input" defaultValue="test" {...register("description")} />
                    </div>
                </div>

                <div className="field">
                    <label className="label" htmlFor="customerId">Customer Id</label>
                    <div className="control">
                        <input id="customerId" style={{"width": "70%"}} className="input" {...register("customerId", { required: true })} />
                    </div>
                    {errors.customerId && <p className="help is-danger">This field is required</p>}
                </div>

                <Items register={register} control={control} />

                <div className="content">
                    <hr className="hr" />
                </div>

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