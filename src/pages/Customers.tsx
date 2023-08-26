import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { GETallCustomers } from "../api/data";
import { TCustomer } from "../types/api-types";
import ActionBtns from "../components/styled-components/ActionBtns";
import Cards from "../components/styled-components/Cards";

function Customers() {
  const [customers, setCustomers] = useState<TCustomer[]>([])
  const { loading, data}: { loading: boolean, data: {"allCustomers": TCustomer[]}} = GETallCustomers()

  
  useEffect(() =>{
  
    !loading && setCustomers(data.allCustomers)
    console.log(customers)
  },[loading]);

  return (
    <div className="cards-wrapper">
    {loading && "loading..."}

      <ActionBtns>
      <div className="btn-wrapper right">
            <Link to="/create" className="btn-not-filled" type="button">
            + New Customer
            </Link>
      </div>
      </ActionBtns>



      <div>
      <Cards>
      <div className="container">
      {customers?.map((cx) => {
        return (
          
          <div key={cx.id} className="card">
          <h3>Name: {cx.firstName + " " + cx.lastName}</h3>
          <p>Email: {cx.email}</p>
          <p>Phone: {cx.phone}</p>
          <ActionBtns>
          <Link className="btn-not-filled" key={cx.id} to={`/${cx.id}`}>
          Visit Profile</Link>
          </ActionBtns>
            </div>

          )})}
          </div>
          </Cards>
      </div>
      </div>
  )
}

export default Customers