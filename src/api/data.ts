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