import { Order } from "../../model/task/order";

export interface OrderProps {
    order: Order;
}

function ReadOnlyContainer(orderProps: OrderProps) {

    return (
        <div className="content">

            <p>
                <strong>Description</strong><br />
                {orderProps.order.description}
            </p>
            <p>
                <strong>Customer Id</strong><br />
                {orderProps.order.customerId}
            </p>

            <hr className="hr" />

            <p><strong>Items</strong></p>

            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                    </tr>
                </thead>
                <tbody>
                    {orderProps.order.itemList.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>{item.productNumber}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ReadOnlyContainer;