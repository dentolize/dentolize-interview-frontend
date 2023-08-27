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
width: 80%;
@media (max-width: 500px){
  width: 100%;
  flex-direction: column;
  align-items: center;
  }
`


const OpaqueLayer = styled.div`

    position:absolute;
    width:100%;
    height:100vh;
  top: 0;
  right: 0;
  opacity: .8;
  trandition: .2s;
  background: #000;
  z-index: 5;
`

const CardsContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 760px){
  // padding-top: 30rem;
}

`

const FormWrapper = styled.div`
  position: relative;

  `

  const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 0.2em;
    
  }
  button,a{
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: button;
    width: fit-content;
    backface-visibility: hidden;
    background-color: #405cf5;
    height: fit-content;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    font-size: 11px;
    padding: 10px 20px;
    text-align: center;
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
    `
  const AddButtonWrapper = styled.div`
  display: flex;
  align-items: space-between;
  button,a{
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: button;
    width: fit-content;
    backface-visibility: hidden;
    background-color: #405cf5;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    height: 44px;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    text-align: center;
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
    `

  const RemoveButtonWrapper = styled.div`
  > div{
    display: flex;
  align-items: center;
  justify-content: center;
  }
  button,a{
    appearance: button;
    width: fit-content;
    backface-visibility: hidden;
    background-color: red;
    border-radius: 6px;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    font-size: 11px;
    padding: 10px 20px;
    text-align: center;
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
  
  &:disabled {
    cursor: default;
  }
  
  &:focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
    `


const FlexCards = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
gap: 0.5em;
`
const Card = styled.div`
min-width: 300px;
border-radius: 30px;
padding: 20px 15px;
text-align: center;
box-shadow: 20px 20px 20px darken(rgba(0,2), 2%),
-20px -20px 20px lighten(rgba(0,2), 2%);
background-color: rgba(0, 0, 0, 0.2);
`

  return (
    <CardsContainer>
<FlexDiv>
    <SearchWrapper>
    <input value={""} type="text" placeholder="Search"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  viewBox="0 0 24 24">
      <defs></defs>
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
    </SearchWrapper>
    <AddButtonWrapper>
            <button onClick={()=>showModal()} type="button">
            + New Customer
            </button>
    </AddButtonWrapper>
</FlexDiv>

{showed &&
      <>
        <OpaqueLayer onClick={()=>setShowed(false)}></OpaqueLayer>
      <FormWrapper>
      <AddCustomerForm />
      </FormWrapper>
      </>
      }


    <div className="cards-wrapper">
    {loading && "loading..."}
      <div>
        <FlexCards>
      {customers?.map((cx) => {
        return (
          <Card>
          <div key={cx.id}>
          <h3>Name: {cx.firstName + " " + cx.lastName}</h3>
          <p>Email: {cx.email}</p>
          <p>Phone: {cx.phone}</p>
            </div>
            <ButtonWrapper>
              <div>

            <RemoveButtonWrapper>
          <button onClick={()=>deleteCustomer(cx.id, cx.firstName, cx.lastName)}>Remove</button>
            </RemoveButtonWrapper>
          <Link className="btn-not-filled" to={`/${cx.id}`}>
          Edit</Link>
              </div>
              <div>
          <Link className="btn-not-filled" to={`/customers/${cx.id}`}>
          Visit Profile</Link>
              </div>
            </ButtonWrapper>
          </Card>

          )})}
            </FlexCards>
      </div>
      </div>
      </CardsContainer>
    

  )
}

export default Customers