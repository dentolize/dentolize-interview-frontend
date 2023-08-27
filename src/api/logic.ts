import { gql, useQuery } from "@apollo/client";
import {  TNewCustomer } from "../types/api-types";

export const GetAllCustomers = () => useQuery(gql`
query {
    allCustomers {
      id,
      firstName,
      lastName,
      email,
      phone
    } 
  }
  `);
export const GetOneCustomer = (id:string) => useQuery(gql`
query {
    Customer(id:${id}) {
      id,
      firstName,
      lastName,
      email,
      phone,
      Orders {
        id,
        customer_id,
        orderNumber,
        orderDate,
        orderStatus
          } 
  }
  }
  `);


export const CreateNewCustomer = async ({firstName, lastName, email, phone}: TNewCustomer) => useQuery(gql`
mutation{
  createCustomer(
    firstName: ${firstName},
    lastName: ${lastName},
    email: ${email},
    phone: ${phone},
  ){
    id,
    firstName,
    lastName
}
}
  `);
export const DeleteCustomer = async (id: string) => useQuery(gql`
mutation{
  removeCustomer(
    id: ${id},
  ){
    id,
    firstName,
    lastName
}
}
  `);