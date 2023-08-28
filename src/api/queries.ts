import { gql } from "@apollo/client";

export const QUERIES = {
    GET_CUSTOMERS: gql`
    query GET_CUSTOMERS{
        allCustomers {
          id,
          firstName,
          lastName,
          email,
          phone
        } 
      }
      `,
    GET_ONE_CUSTOMER: gql`
    query GET_CUSTOMER($id:ID!){
        Customer(id: $id) {
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
      `,
    CREATE_CUSTOMER: gql`
    mutation CRT_CUSTOMER($firstName: String!, $lastName: String!, $email: String!, $phone: String!){
      createCustomer(
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        phone: $phone,
      ){
        id,
        firstName,
        lastName
    }
    }
      `,
    REMOVE_CUSTOMER: gql`
    mutation RM_CUSTOMER($id: ID!){
      removeCustomer(
        id: $id,
      ){
        id,
        firstName,
        lastName
    }
    }
      `
}