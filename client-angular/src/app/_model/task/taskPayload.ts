import { Order } from "./order";

export interface TaskPayload {
    id: string;
    order?: Order;
}