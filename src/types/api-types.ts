type Customer = "Customer";

interface Order{
  id: string;
  customer_id: string;
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
    } 

export interface TCustomer {
  __typename: Customer;
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  Orders: Order[];
}


export type TNewCustomer = Omit<TCustomer, "id" | "__typename" | "Orders" >