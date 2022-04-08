import { Children } from "react";
import Box from "../../Box";
import { Order } from "../../model/task/order";

export interface OrderProps {
    order: Order;
}

function ReadOnlyContainer(orderProps: OrderProps) {

    return (
        <>
            <Box>
                <div className="content">
                    <h4>Order</h4>

                    <p>
                        <strong>Description</strong><br />
                        {orderProps.order.description}
                    </p>
                    <p>
                        <strong>Customer Id</strong><br />
                        {orderProps.order.customerId}
                    </p>
                </div>
            </Box>

            <Box>
                <div className="content">
                    <h4>Items</h4>
                </div>

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
            </Box>
        </>
    )
}

export default ReadOnlyContainer;