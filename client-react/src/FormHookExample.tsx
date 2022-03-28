import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { Order } from "./model/task/order";
import ButtonBar from "./page/task/ButtonBar";
import FormResult from "./page/task/FormResult";
import Items from "./page/task/Items";



// https://codesandbox.io/s/ji8fv?file=/src/App.tsx

function FormHookExample() {

    let auth = useAuth();

    //const [formData, setFormData] = React.useState<Inputs>({ example: "example", exampleRequired: "exampleRequired", books: [{ title: "xtitle", author: "xauthor" }] });
    const [formData, setFormData] = React.useState<Order>();

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Order>({ defaultValues: formData });


    const onSubmit: SubmitHandler<Order> = data => {
        console.log(data);
        setFormData(data);

        axios.post<Order>('/api/orders', data, { headers: { "Fake-User": auth.user?.id || '' } })
            .then(response => {
                console.log(response.data);
                //navigate('/task/' + response.data.taskName + '/' + response.data.taskId);
            });
    }

    //console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">


                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}


                    <div className="field">
                        <label className="label" htmlFor="description">Description</label>
                        <div className="control">
                            <input id="description" className="input" defaultValue="test" {...register("description")} />
                        </div>
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}


                    <div className="field">
                        <label className="label" htmlFor="customerId">Example Required</label>
                        <div className="control">
                            <input id="customerId" className="input" {...register("customerId", { required: true })} />
                        </div>
                        {/* errors will return when field validation fails  */}
                        {errors.customerId && <p className="help is-danger">This field is required</p>}
                    </div>
                    {/* errors will return when field validation fails  */}


                    
                    <Items register={register} control={control} />

                    <div className="content">
                        <hr className="hr" />
                    </div>

                    <ButtonBar />
                </form>

                <FormResult order={formData} />
            </div>
        </div>
    );
}

export default FormHookExample;