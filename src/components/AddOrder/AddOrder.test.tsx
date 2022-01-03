import { render } from "@testing-library/react";
import { AddOrder } from "./AddOrder";

 

test('renders add order', () => {
    const addOrder = jest.fn();
    const {container} = render(<AddOrder addOrder= {addOrder}  availableOrderTime={["10:30", "12:30", "18:30"]} />)
   
   
  })