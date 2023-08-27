import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetOneCustomer } from "../api/logic"
import { TCustomer } from "../types/api-types"
import Cards from "../components/styled-components/Cards.styled"
import styled from "styled-components"
function Customer() {
  const [customer, setCustomer] = useState<TCustomer>()
  const { id }: {id: string} = useParams() 

const {loading, data}: { loading: boolean, data: {"Customer": TCustomer}} = GetOneCustomer(id)


 useEffect(()=> {
!loading && setCustomer(data.Customer) 
console.log(data)
  },[loading])


const OrdersIndicator = styled.div`

  font-size: 6rem;
  font-weight: 700;
  color: var(--app-container);
  opacity: .6;

`

const CustomerDataContainer  = styled.div`
display: flex;
flex-direction: column;
width: 100%;
color: var(--app-container);
> div{
  margin: 3em 0;
}

`
const CustomerData  = styled.div`
background-color: var(--secondary-color);
border-radius: 8px;
box-shadow: 2px 2px 2px 20px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
padding: 10px 20px;
width: 100%;
color: var(--app-container);
h1{ 
  font-size: 50px; 
  font-weight: bold;
  margin-bottom: 1rem
}
section > p {
  margin: .5rem 0;
}
`

const OrderData  = styled.div`
border-radius: 8px;
box-shadow: 2px 2px 2px 20px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
padding: 10px 0;
width: 100%;
color: var(--app-container);

h1{
  margin: auto;
}
ul{
border-radius: 32px;
padding: 32px 32px;
overflow: hidden;
display: flex;
flex-direction: column;
color: var(--link-color-hover);
}
ul > li {
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 2rem;
  background-color: var(--link-color-active-bg);
  box-shadow: 2px 2px 20px 2px rgba(0,0,0,.1)
}
ul > li:last-child {
  margin-bottom: 0;
}
ul > li > p {
  margin-bottom: 2px;
  opacity: 0.9;
  color: var(--main-color);
}
ul > li  > p:last-child {
  margin-bottom: 0;

}
`
const H1 = styled.h1`
font-size: 4.5em;
color: var(--main-color);
opacity: .4;
margin: auto;`

  return (
    <CustomerDataContainer>
    <CustomerData>
      <h1>{customer?.firstName + " " + customer?.lastName}</h1>
          <section>
          <p>First Name: {customer?.firstName}</p>
          <p>Last Name: {customer?.lastName}</p>
          <p>Email: {customer?.email}</p>
          <p>Phone: {customer?.phone}</p> 
          <p>Number of Orders: {customer?.Orders.length}</p>
          </section>
          </CustomerData>
          <H1>
            {customer?.Orders.length + " " + "Order"}

          </H1>
          <OrderData>
          <ul>
        {customer?.Orders.map(order=>(
              <li>
          <section key={order.id}>
              <p>Order Number: {order?.orderNumber}</p>
          <p>Date: {order?.orderStatus}</p>
          <p>Status: {order?.orderDate}</p> 
     
          </section>
              </li>
        ))}
        </ul>
          </OrderData>

    </CustomerDataContainer>
  )
}

export default Customer