import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETallCustomers } from "../api/data";
import { TCustomer } from "../types/api-types";
import AddCustomerForm from "../components/AddCustomerForm";

function Customers() {
  const [customers, setCustomers] = useState<TCustomer[]>([])


  const { loading, data}: { loading: boolean, data: {"allCustomers": TCustomer[]}} = GETallCustomers()
  
  useEffect(() =>{
  
    !loading && setCustomers(data.allCustomers)
    console.log(customers)
  },[loading]);
  const [showed, setForm] = useState<boolean>(false)

  const showForm = () => setForm(prev=>!prev)
  
  
  return (
  <>

{loading && "loading..."}
      {customers?.map((cx) => {
        return (
          <Link key={cx.id} to={`/${cx.id}`}>
            <div>
          {cx.firstName + " " + cx.lastName}
          {cx.id}
          {cx.email}
          {cx.phone}
            </div>
        </Link>

      )})}
      <button type="button" onClick={()=>showForm()}>
Add Customer
      </button>
      <AddCustomerForm showed={showed}/>
      </>
  )
}

export default Customers