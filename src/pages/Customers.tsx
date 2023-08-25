import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GETallCustomers } from "../api/data";
import { TCustomer } from "../types/api-types";

function Customers() {
  const [customers, setCustomers] = useState<TCustomer[]>([])


  const { loading, data}: { loading: boolean, data: {"allCustomers": TCustomer[]}} = GETallCustomers()
  
  useEffect(() =>{
  
    if(!loading) setCustomers(data.allCustomers)
    console.log(customers)
  },[loading]);
  

  
  
  return (<>

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
      </>
  )
}

export default Customers