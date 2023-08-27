import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { DeleteCustomer, GetAllCustomers } from "../api/logic";
import { TCustomer } from "../types/api-types";
import ActionBtns from "../components/styled-components/ActionBtns";
import Cards from "../components/styled-components/Cards.styled";
import AddCustomerForm from "../components/AddCustomerForm";
import styled from "styled-components";
import { Container } from "../components/styled-components/Container.styled";


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



const SearchWrapper = styled.div`
  
border-radius: 20px;
background-color: var(--search-area-bg);
padding-right: 12px;
height: 40px;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 480px;
color: var(--light-font);
box-shadow: 0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1);
overflow: hidden;

input {
  border: none;
flex: 1;
outline: none;
height: 100%;
padding: 0 20px;
font-size: 16px;
background-color: var(--search-area-bg);
color: var(--main-color);
&:placeholder {
color: var(--main-color);
opacity: .6;
}
}
`

const FlexDiv = styled.div`
display:flex;
justify-content: space-between;
gap: 0.5em;
padding: 2em;
// background-color: #fff;
// border-radius: 8px;
// box-shadow: 2px 2px 2px 20px rgba(0, 0, 0, 0.3)
`


  return (
    <Container>
<FlexDiv>
    <SearchWrapper>
    <input value={""} type="text" placeholder="Search"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  viewBox="0 0 24 24">
      <defs></defs>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
    </SearchWrapper>
    <ActionBtns>
      <div className="btn-wrapper right">
            <button onClick={()=>showModal()} type="button">
            + New Customer
            </button>
      </div>
      </ActionBtns>
</FlexDiv>

{showed &&
      <>
        <div className="opaque-bg" onClick={()=>setShowed(false)}></div>
      <div>
      <AddCustomerForm />
      </div>
      </>
      }


    <div className="cards-wrapper">
    {loading && "loading..."}
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
      </Container>
    

  )
}

export default Customers