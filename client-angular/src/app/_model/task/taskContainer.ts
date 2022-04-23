import { Order } from "./order";
import { Task } from "./task";

export interface TaskContainer {
    taskProjection: Task;
    order: Order;
}