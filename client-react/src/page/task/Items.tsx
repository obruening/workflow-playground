import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { Order } from "../../model/task/order";

function Items(itemProps: ItemProps) {

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control: itemProps.control, // control props comes from useForm (optional: if you are using FormContext)
        name: "itemList", // unique name for your Field Array
    });

    return (
        <>

            <div className="content">
                <hr className="hr" />
            </div>

            <div className="field is-grouped">
                <button className="button is-link" onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
                    event.preventDefault();
                    append({ productName: "dummy product name" });
                }}>
                    Add Item
                </button>
            </div>


            {fields.map((field, index) => (
                <div className="field is-grouped">
                    <div className="control">
                        {index === 0 && <label className="label">Name</label> }
                        <input type="text"
                            className="input"
                            key={field.id} // important to include key with field's id
                            {...itemProps.register(`itemList.${index}.productName`)}
                        />
                    </div>

                    <div className="control">
                        {index === 0 && <label className="label">Number</label> }
                        <input type="text"
                            className="input"
                            key={field.id} // important to include key with field's id
                            {...itemProps.register(`itemList.${index}.productNumber`)}
                        />
                    </div>

                    <p className="control">
                        {index === 0 && <label className="label has-text-centered">Action</label> }
                        <button className="button is-light">
                            Delete
                        </button>
                    </p>
                </div>
            ))}


        </>

    )
}

export type ItemProps = {
    control?: Control<Order, any>;
    register: UseFormRegister<Order>;
}

export default Items;


