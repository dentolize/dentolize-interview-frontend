import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GEToneCustomer } from "../api/data"
import { TCustomer } from "../types/api-types"
function Customer() {
  const [customer, setCustomer] = useState<TCustomer>()
  const { id }: {id: string} = useParams() 

const {loading, data}: { loading: boolean, data: {"Customer": TCustomer}} = GEToneCustomer(id)


 useEffect(()=> {
!loading && setCustomer(data) 
console.log(data)
  },[loading])

  return (
    <>

  <div className="container">
       <h1>Customer Details Page - {JSON.stringify(customer)}</h1>
    </div>

    </>
  )
}

export default Customer