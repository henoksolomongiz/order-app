import React, { useEffect } from "react";
import { OrderList } from "../../components/OrderList/OrderList";
import { useOrderState } from "../../state/useOrderState";
import { AddOrder } from "../AddOrder/AddOrder";
import "./Home.css";

function Home() {
  const orderState = useOrderState([], []);
  const {
    addOrder,
    getOrders,
    orders,
    availableOrderTime,
    getAvailableOrderTime,
  } = orderState;

  const handleUnmount = () => {};

  const handleMounted = () => {
    getOrders();
    getAvailableOrderTime(orders);
    return handleUnmount;
  };

  useEffect(handleMounted, []);

  return (
    <div className="container">
      <div className="items">
        <AddOrder addOrder={addOrder} availableOrderTime={availableOrderTime} />
        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default Home;
