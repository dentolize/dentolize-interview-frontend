type Customer = "Customer";

export interface TCustomer {
  __typename: Customer;
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}
