import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetOneCustomer } from "../api/logic"
import { TCustomer } from "../types/api-types"
import Cards from "../components/styled-components/Cards"
function Customer() {
  const [customer, setCustomer] = useState<TCustomer>()
  const { id }: {id: string} = useParams() 

const {loading, data}: { loading: boolean, data: {"Customer": TCustomer}} = GetOneCustomer(id)


 useEffect(()=> {
!loading && setCustomer(data.Customer) 
console.log(data)
  },[loading])


  return (
    <>
    <Cards>

  <div className="container">
  <div className="card">
          <h2>{customer?.firstName + " " + customer?.lastName}'s Profile</h2>
          <section>

          <p>First Name: {customer?.firstName}</p>
          <p>Last Name: {customer?.lastName}</p>
          <p>Email: {customer?.email}</p>
          <p>Phone: {customer?.phone}</p> 
          <p>Number of Orders: {customer?.Orders.length}</p>
          </section>
          <h3>Orders</h3>
        {customer?.Orders.map(order=>(
          <section key={order.id}>
          <p>Order Number: {order?.orderNumber}</p>
          <p>Date: {order?.orderStatus}</p>
          <p>Status: {order?.orderDate}</p> 
          <hr/>
          </section>
        ))}

          </div>
    </div>
    </Cards>
    </>
  )
}

export default Customer