import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
// import { GetAllCustomers } from "../api/logic";
import AddCustomerForm from "../components/AddCustomerForm";
import { TCustomer } from "../types/api-types";
import { useMutation, useQuery } from "@apollo/client";
import { QUERIES } from "../api/queries";
import Spinner from "../components/Spinner";



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

const Notification = styled.div`
position: absolute;
bottom: 10px;
left: 10px;
> div {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;

> div {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	positon: relative;
	width: 50px;
	height: 50px;
	background: ${({bg})=>bg};
	transform: scale(0);
	border-radius: 50%;
	color: ${({color})=>color};
	opacity: 0;
	overflow: hidden;
	animation: scale-in .3s ease-out forwards,
		expand .35s .25s ease-out forwards;

> div  {
	display: flex;
	align-items: center;
	padding: 0 16px;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	animation: fade-in .65s ease-in forwards;
>span:first-child{
  border-radius: 50%;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255,.1);
}
}
}

@keyframes scale-in {
	100% {
		transform: scale(1);
		opacity: 1;
	}
}

@keyframes expand {
	50% {
		width: 350px;
		border-radius: 6px;
	}
	100% {
		width: 300px;
		border-radius: 4px;
		box-shadow: 0px 1px 3px 0px rgba(0,0,0,.2),
								0px 1px 1px 0px rgba(0,0,0,.14),
								0px 3px 3px -1px rgba(0,0,0,.12);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: .8;
	}
}
`

function Customers() {
  
  const [customers, setCustomers] = useState<TCustomer[]>([])
  const [showed, setShowed] = useState<boolean>(false)
  // const { loading, data}: { loading: boolean, data: {"allCustomers": TCustomer[]}} = GetAllCustomers()
  const { loading: GET_ALL_LOADING, data: GET_CUSTOMERS} = useQuery(QUERIES.GET_CUSTOMERS)

  






  const showModal = () => {
    setShowed(prev=> !prev)
    console.log(showed)
  }
  useEffect(() =>{
  
    !GET_ALL_LOADING && setCustomers(GET_CUSTOMERS.allCustomers)
    console.log(customers)
  },[GET_ALL_LOADING]);


const [searchText, setSearchText] = useState<string>("")

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchVal = e.target.value.toLowerCase()
    setSearchText(searchVal);
    console.log(searchVal);
    
  }
  const filteredCustomers = customers.filter(customer => {
    if(searchText === ""){
      return customer
    }else{
      return customer.firstName.toLowerCase().includes(searchText) || customer.lastName.toLowerCase().includes(searchText)
    }
  })


  const [removeCustomer, {loading: DELELTE_LOADING, data: RM_CUSTOMER, error }] = useMutation(QUERIES.REMOVE_CUSTOMER);

  const removeCx =  (id:string, firstName: string, lastName: string) =>{
    {
      const confirmed = confirm(`Do Youy want to delete ${firstName + " " + lastName}'s profile?`)
        if(!confirmed) return;
        setNotificationType({bg: "red", color:"#fff", body: `${firstName + " " + lastName} has been removed!`})
        removeCustomer({ variables: { id }})
        console.log(RM_CUSTOMER)
        notify()
  }
  }

  const [showNotifictaion, setShowNotification] = useState<boolean>(false)
  const [notificationType, setNotificationType] = useState<{bg:string, color:string, body: string}>({bg:"green", color:"#fff",body: "Voila!"})

  const notify = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    },3000)
  }
  if (DELELTE_LOADING) return <Spinner/>
  if (error) return `Customer Not Removed! ${error.message}`;

  return (
    <CardsContainer>
      {showNotifictaion && <Notification bg={notificationType.bg} color={notificationType.color}>
      <div>
	<div>
		<div>
			<span>i</span>
			<span>&nbsp;&nbsp;{notificationType.body}</span>
		</div>
	</div>
</div>

        </Notification>}
<FlexDiv>
    <SearchWrapper>
    <input value={searchText} onChange={(e)=>handleSearch(e)} type="text" placeholder="Search"/>
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
    {GET_ALL_LOADING && <Spinner/>}
      <div>
        <FlexCards>
      {filteredCustomers?.map((cx) => {
        return (
          <Card key={cx.id}>
          <div>
          <h3>Name: {cx.firstName + " " + cx.lastName}</h3>
          <p>Email: {cx.email}</p>
          <p>Phone: {cx.phone}</p>
            </div>
            <ButtonWrapper>
              <div>

            <RemoveButtonWrapper>
          <button onClick={()=>removeCx(cx.id, cx.firstName, cx.lastName)}>Remove</button>
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