import { Item } from "./item";

export interface Order {
    id: number;
    description: string;
    customerId: number;
    itemList: Array<Item>;
    decision: string;
}