import React, { useEffect } from "react"; 
import { OrderList } from "../../components/OrderList/OrderList";
import { useOrderState } from "../../state/useOrderState"; 
import "./Home.css"; 

function Home() {
  const orderState = useOrderState([]);
  const { addOrder, getOrders, orders } = orderState;

  const handleUnmount = () => {};

  const handleMounted = () => {
    getOrders();

    return handleUnmount;
  };

  useEffect(handleMounted, []);

  return (
    <div className="App">
      <OrderList addOrder={addOrder} orders={orders} />
    </div> 
  );
}

export default Home;
