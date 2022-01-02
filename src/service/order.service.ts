import http from "../util/http-util";
import { Order } from "../model/Order";

class OrderService {
  getAll() {
    return http.get<Array<Order>>("sample-orders.json");
  }
}

export default new OrderService();
