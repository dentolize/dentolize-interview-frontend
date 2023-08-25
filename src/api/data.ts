import { gql, useQuery } from "@apollo/client";


export const GETallCustomers = () => useQuery(gql`
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
export const GEToneCustomer = (id:string) => useQuery(gql`
query {
    Customer(id:${id}) {
      id,
      firstName,
      lastName,
      email,
      phone
    } 
  }
  `);