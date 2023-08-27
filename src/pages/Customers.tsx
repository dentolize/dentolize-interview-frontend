import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { DeleteCustomer, GetAllCustomers } from "../api/logic";
import { TCustomer } from "../types/api-types";
import ActionBtns from "../components/styled-components/ActionBtns";
import Cards from "../components/styled-components/Cards";
import AddCustomerForm from "../components/AddCustomerForm";


function Customers() {
  
  const [customers, setCustomers] = useState<TCustomer[]>([])
  const [showed, setShowed] = useState<boolean>(false)
  const { loading, data}: { loading: boolean, data: {"allCustomers": TCustomer[]}} = GetAllCustomers()



const deleteCustomer = (id:string, firstName: string, lastName: string) => {
  confirm(`Do Youy want to delete ${firstName + " " + lastName}'s profile?`)

  DeleteCustomer(id)
  // console.log(x)
}



  const showModal = () => {
    setShowed(prev=> !prev)
    console.log(showed)
  }
  useEffect(() =>{
  
    !loading && setCustomers(data.allCustomers)
    console.log(customers)
  },[loading]);



  return (
    <div className="cards-wrapper">
    {loading && "loading..."}

      <ActionBtns>
      <div className="btn-wrapper right">
            <button onClick={()=>showModal()} className="btn-not-filled" type="button">
            + New Customer
            </button>
      </div>
      </ActionBtns>
      {showed &&
      <>
        <div className="opaque-bg" onClick={()=>setShowed(false)}></div>
      <div className="add-form">
      <AddCustomerForm />
      </div>
      </>
      }
      <div>
      <Cards>
      <div className="container">
      {customers?.map((cx) => {
        return (
          
          <div key={cx.id} className="card">
            <div className="close-btn" onClick={()=>deleteCustomer(cx.id, cx.firstName, cx.lastName)}>+</div>
          <h3>Name: {cx.firstName + " " + cx.lastName}</h3>
          <p>Email: {cx.email}</p>
          <p>Phone: {cx.phone}</p>
          <ActionBtns>
          <Link className="btn-not-filled" to={`/${cx.id}`}>
          Edit</Link>
          <Link className="btn-not-filled" to={`/${cx.id}`}>
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