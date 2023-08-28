import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
// import { GetAllCustomers } from "../api/logic";
import { TCustomer, TNewCustomer } from "../types/api-types";
import { useMutation, useQuery } from "@apollo/client";
import { QUERIES } from "../api/queries";
import Spinner from "../components/Spinner";

const NewCustomerForm = styled.div`
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
transition: all 0.2s;
z-index: 10;
width: 40%;
@media (max-width: 1200px){
  width: 70%;
}
@media (max-width: 600px){
  width: 90%;
}

form {
  background: #F5F9FF; 
  padding: 3em;
  box-sizing: border-box;
  margin: 0px auto;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.2);
  border-radius: 5px;
  @media (max-width: 400px){
    padding: 1em;
  }
  h1 {
    box-sizing: border-box;
    padding: 20px;
background-color: rgba(0,0,0,0.08);
text-align: center;
margin:0em auto 1em;
border-radius: 8px;

  }
> div{
  display: flex;
  margin: 0 0 1rem 0;

label {
  text-align: right;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 400px){
    font-size: 15px;
    padding-inline: 10px;
  }
 
}
>  input {
  width: 70%;
  padding: 0.5rem;
  box-sizing: border-box;
  justify-content: space-between;
  font-size: 1.1rem;
}
input {
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  -webkit-appearance: none;
  color: var(--input-color);
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border .3s ease;
  &::placeholder {
      color: var(--input-placeholder);
  }
  &:focus {
      outline: none;
      border-color: var(--input-border-focus);
  }
}
> div:last-child{
  display: flex;
  width: 30%;
  gap: 0.5em;
  justify-content: space-between;

button:last-child{
  background-color: #e23e3e;
}
}
`


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

    position:fixed;
    width:100%;
    height:100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
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
margin: 0 auto;
flex-wrap: wrap;
justify-content: center;
// justify-content: flex-start;
gap: 0.5em;
@media (max-width: 1050px){
  justify-content: center;
}
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
  

// =========== Handle API requests =================

  // GET All
  const [customers, setCustomers] = useState<TCustomer[]>([]) 

  const { loading: GET_ALL_LOADING, data: GET_CUSTOMERS, refetch} = useQuery(QUERIES.GET_CUSTOMERS)

  useEffect(() =>{
  
    !GET_ALL_LOADING && setCustomers(GET_CUSTOMERS.allCustomers)
    console.log(customers)
  },[GET_ALL_LOADING]);


// DELETE

const [removeCustomer, {loading: DELELTE_LOADING, data: RM_CUSTOMER, error }] = useMutation(QUERIES.REMOVE_CUSTOMER);

const removeCx =  (id:string, firstName: string, lastName: string) =>{
  {
    const confirmed = confirm(`Are You Sure You Want to Delete ${firstName + " " + lastName}'s profile?`)
      if(!confirmed) return;
      setNotificationType({bg: "red", color:"#fff", body: `${firstName + " " + lastName} has been removed!`})
      removeCustomer({ variables: { id }, refetchQueries: [GET_CUSTOMERS]})
      refetch(GET_CUSTOMERS)
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

// Create New
const [showed, setShowed] = useState<boolean>(false)

const showModal = () => {
  setShowed(prev=> !prev)
  console.log(showed)
}

const [newCustomer, setNewCustomer] = useState<TNewCustomer>({firstName: "", lastName: "", email: "", phone: ""})
  

// const [errors, setErrors]


const [createCustomer, {loading: CREATE_LOADING, data: CREATE_DATA, error: CREATE_ERROR }] = useMutation(QUERIES.CREATE_CUSTOMER);

const addNewCustomer = (e:React.FormEvent) => {
e.preventDefault()
console.log(newCustomer)

createCustomer({ variables: { ...newCustomer }, refetchQueries: [{query: GET_CUSTOMERS}]})
console.log(CREATE_DATA)
setNotificationType({bg: "green", color:"#fff", body: `${newCustomer.firstName + " " + newCustomer.lastName} Has Been Created!`})
      console.log(RM_CUSTOMER)
      setShowed(false)
      resetForm()
      refetch()
      notify()

    }

    const resetForm = () => {
      setNewCustomer({firstName: "", lastName: "", email: "", phone: ""});
    };
  
  
  // =========== Handle Search Bar =================
  
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


// Conditional Rendering
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
      <NewCustomerForm>
      {/* <AddCustomerForm /> */}
      <form onSubmit={addNewCustomer}>
        <h1>Create New Customer</h1>
        {CREATE_LOADING && "Creating new Customer" + <Spinner/>}
  <div>
    <label htmlFor="first-name">First Name</label>
    <input type="text" name="first-name" id="first-name" placeholder="Joe" required value={newCustomer.firstName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewCustomer({...newCustomer, firstName: e.target.value})} />
  </div>
  <div>
    <label htmlFor="last-name">Last Name</label>
    <input type="text" name="last-name" id="last-name" placeholder="Doe" required value={newCustomer.lastName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewCustomer({...newCustomer, lastName: e.target.value})} />
  </div>
  <div>
    <label htmlFor="email-input">Email</label>
    <input type="email" name="email-input" id="email-input" placeholder="example@domain.com" required value={newCustomer.email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewCustomer({...newCustomer, email: e.target.value})}/>
  </div>
  <div>
    <label htmlFor="phone-input">Phone</label>
    <input type="phone" name="phone-input" id="phone-input" required placeholder="(+02) 109 757 6804"  value={newCustomer.phone} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewCustomer({...newCustomer, phone: e.target.value})}/>
  </div>
  <div>
    <AddButtonWrapper>
      <button type="submit">Create
        </button>
      <button type="reset" onClick={resetForm}>Reset
        </button>
      </AddButtonWrapper> 
      {CREATE_ERROR && "Invalid Inputs!"}
      
  </div>
</form>
      </NewCustomerForm>
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