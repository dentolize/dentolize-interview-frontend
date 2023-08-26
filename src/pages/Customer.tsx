import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GEToneCustomer } from "../api/data"
import { TCustomer } from "../types/api-types"
import Cards from "../components/styled-components/Cards"
function Customer() {
  const [customer, setCustomer] = useState<TCustomer>()
  const { id }: {id: string} = useParams() 

const {loading, data}: { loading: boolean, data: {"Customer": TCustomer}} = GEToneCustomer(id)


 useEffect(()=> {
!loading && setCustomer(data.Customer) 
console.log(data)
  },[loading])


  return (
    <>
    <Cards>

  <div className="container">
  <div className="card">
          <h3>Name: {customer?.firstName + " " + customer?.lastName}</h3>
          <p>Email: {customer?.email}</p>
          <p>Phone: {customer?.phone}</p> 
          </div>
    </div>
    </Cards>
    </>
  )
}

export default Customer