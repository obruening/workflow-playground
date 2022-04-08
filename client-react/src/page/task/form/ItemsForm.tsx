import { Control, FormState, useFieldArray, UseFormRegister } from "react-hook-form";
import Box from "../../../Box";
import { Order } from "../../../model/task/order";

function ItemsForm(itemsFormProps: ItemsFormProps) {

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control: itemsFormProps.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "itemList", // unique name for your Field Array
    });

    return (
        <Box>
            <div className="content">
                <h4 className="h4">Items</h4>
            </div>

            <div className="field is-grouped">
                <button className="button is-link is-light" onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                    event.preventDefault();
                    append({ productName: "dummy product name" });
                }}>
                    Add Item
                </button>
            </div>

            {fields.map((field, index) => (
                <div className="field is-grouped">
                    <div className="control">
                        {index === 0 && <label className="label">Name</label>}
                        <input type="text"
                            className="input"
                            key={field.id} // important to include key with field's id
                            {...itemsFormProps.register(`itemList.${index}.productName`)}
                        />
                    </div>

                    <div className="control">
                        {index === 0 && <label className="label">Number</label>}
                        <input type="text"
                            className="input"
                            key={field.id} // important to include key with field's id
                            {...itemsFormProps.register(`itemList.${index}.productNumber`)}
                        />
                    </div>

                    <p className="control">
                        {index === 0 && <label className="label has-text-centered">Action</label>}
                        <button className="button is-link is-light">
                            Delete
                        </button>
                    </p>
                </div>
            ))}
        </Box>
    )
}

export type ItemsFormProps = {
    control?: Control<Order, any>;
    register: UseFormRegister<Order>;
    formState: FormState<Order>; 
}

export default ItemsForm;


