// import { styled } from "styled"

import { useState } from "react"
import { styled } from "styled-components"
import { TCustomer } from "../types/api-types"

const AddCustomerForm = (showed:boolean) => {
    console.log(showed)

type TNewCustomer = Omit<TCustomer, "id" | "__typename" >

    const [newCustomer, setNewCustomer] = useState<TNewCustomer>({firstName: "", lastName: "", email: "", phone: ""})

    // const [errors, setErrors]

    const AddNewCustomer = (e:React.FormEvent) => {
    e.preventDefault()
    console.log(newCustomer)
    }
  
  const Main = styled.div`
        align-self: center;
        background-color: #fefefe;
        border: 1px solid #f2f2f2;
        border-radius: 8px;
        box-shadow:  0 30px 60px -30px rgba(0, 0, 0, .5);
        min-width: 350px;
        max-width: 450px;
        width: 40vw;
        padding: 2rem;`
    const FormBtns = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1em 0 0 0;
    button {
    margin-left: 16px;
    padding: .35em 1em;
    box-shadow:  0 30px 60px -30px rgba(0, 0, 0, .5);
    cursor: pointer;
    border: 1px solid #3498db;
    background-color: #fff;
    transition: .3px;
    font-size: 1.2rem;
    border-radius: 8px;
    color: #3498db;
    &:enabled:hover {
        background-color: #3498db;
        color: #fff;
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .3);
    }
    &--filled {
        @extend .a-btn;
        background-color: #3498db;
        border-color: #3498db;
        color: #fff;
        &:enabled:hover {
            background-color: #2980b9;
            border-color: #2980b9;
        }
    }
    &:disabled {
        background-color: #ecf0f1;
        border-color: #bdc3c7;
        color: #6a6a6a;
    }
    } 
    `
    const FormFields = styled.div`
    display: flex;
    flex-wrap: wrap;
     margin-bottom: .5em;
    &:last-child {
        margin-bottom: 0;
    }
    .icon {
        align-self: center;
        fill: #2980b9;
        width: 15px;
        height: 15px;
        padding: .5em .5em;
    }
    label {
        color: rgba(0,0,0,0.5);
        align-self: center;
        flex-shrink: 0;
        flex-basis: 100%;
        font-size:14px;
        font-weight: bold;
        width: 100%;
        .label--required:after {
            content: '*';
            color: red;
            margin-left: 5px;
        }
        @include breakpoint(sm) {
            flex-basis: 80px;
            width: 80px;
        }
    }
    > section {
        display: flex;
        flex: 1;
        input {
            transition: .3s;
            border: 0;
            border-left: 1px solid #ccc;
            flex-grow: 1;
            font-size: 9px;
            font-weight: 300;
            padding: .35em .5em;
            background-color: #fff;
            border: 1px solid #aaa;
            border-radius: 8px;
            &::placeholder{
                opacity: 0.4
            }
        }
    }`



    return (
    <>
    {showed && 
    <> 
    <Main>
    <form onSubmit={AddNewCustomer}>
        <h1>Add New Customer</h1>

        <FormFields className="form-field">
            <label htmlFor="Formfields" className="label--required">First Name</label>
            <section>
                <svg className="icon icon-person"><use href="#icon-person"></use></svg>
                <input value={newCustomer?.firstName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewCustomer({...newCustomer, firstName: e.currentTarget.value})} id="Formfields" required type="text" placeholder="First Name" />
            </section>
        </FormFields>

        <FormFields className="form-field">
            <label htmlFor="Formfields" className="label--required">Last    Name</label>
            <section>
                <svg className="icon icon-person"><use href="#icon-person"></use></svg>
                <input id="Formfields" required type="text" placeholder="Last Name" />
            </section>
        </FormFields>

        <FormFields className="form-field">
            <label htmlFor="phone" className="label--required">Phone</label>
            <section>
                <svg className="icon icon-phone"><use href="#icon-phone"></use></svg>
                <input id="phone" required type="tel" placeholder="(234) 234-2342" />
            </section>
        </FormFields>

        <FormFields className="form-field">
            <label htmlFor="email" className="label--required">Email</label>
            <section>
                <svg className="icon icon-mail_outline"><use href="#icon-mail_outline"></use></svg>
                <input id="email" required type="email" placeholder="somebody@me.com" />
            </section>
        </FormFields>
        
        

        <FormBtns>
            <button className="a-btn--filled" type="submit">Add</button>
            <button className="a-btn">Reset</button>
        </FormBtns>

    </form>
</Main>

<svg style={{position: "absolute", width: 0, height: 0}} width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
<defs>
    <symbol id="icon-close" viewBox="0 0 24 24">
<title>close</title>
<path className="path1" d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
</symbol>
    <symbol id="icon-mail_outline" viewBox="0 0 24 24">
<title>mail_outline</title>
<path className="path1" d="M12 11.016l8.016-5.016h-16.031zM20.016 18v-9.984l-8.016 4.969-8.016-4.969v9.984h16.031zM20.016 3.984c1.078 0 1.969 0.938 1.969 2.016v12c0 1.078-0.891 2.016-1.969 2.016h-16.031c-1.078 0-1.969-0.938-1.969-2.016v-12c0-1.078 0.891-2.016 1.969-2.016h16.031z"></path>
</symbol>
<symbol id="icon-phone" viewBox="0 0 24 24">
<title>phone</title>
<path className="path1" d="M6.609 10.781c1.453 2.813 3.797 5.156 6.609 6.609l2.203-2.203c0.281-0.281 0.703-0.375 1.031-0.234 1.125 0.375 2.344 0.563 3.563 0.563 0.563 0 0.984 0.422 0.984 0.984v3.516c0 0.563-0.422 0.984-0.984 0.984-9.375 0-17.016-7.641-17.016-17.016 0-0.563 0.422-0.984 0.984-0.984h3.516c0.563 0 0.984 0.422 0.984 0.984 0 1.266 0.188 2.438 0.563 3.563 0.094 0.328 0.047 0.75-0.234 1.031z"></path>
</symbol>
<symbol id="icon-edit_location" viewBox="0 0 24 24">
<title>edit_location</title>
<path className="path1" d="M14.906 7.547c0.141-0.141 0.141-0.375 0-0.516l-0.938-0.938c-0.141-0.141-0.375-0.141-0.516 0l-0.703 0.703 1.453 1.453zM10.453 12l3.328-3.328-1.453-1.453-3.328 3.328v1.453h1.453zM12 2.016c3.844 0 6.984 3.141 6.984 6.984 0 5.25-6.984 12.984-6.984 12.984s-6.984-7.734-6.984-12.984c0-3.844 3.141-6.984 6.984-6.984z"></path>
</symbol>
<symbol id="icon-home" viewBox="0 0 24 24">
<title>home</title>
<path className="path1" d="M9.984 20.016h-4.969v-8.016h-3l9.984-9 9.984 9h-3v8.016h-4.969v-6h-4.031v6z"></path>
</symbol>
<symbol id="icon-person" viewBox="0 0 24 24">
<title>person</title>
<path className="path1" d="M12 14.016c2.672 0 8.016 1.313 8.016 3.984v2.016h-16.031v-2.016c0-2.672 5.344-3.984 8.016-3.984zM12 12c-2.203 0-3.984-1.781-3.984-3.984s1.781-4.031 3.984-4.031 3.984 1.828 3.984 4.031-1.781 3.984-3.984 3.984z"></path>
</symbol>
    <symbol id="icon-check_circle" viewBox="0 0 24 24">
<title>check_circle</title>
<path className="path1" d="M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563-1.406 1.406zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"></path>
</symbol>
    <symbol id="icon-search" viewBox="0 0 32 32">
<title>search</title>
<path className="path1" d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
</symbol>
</defs>
</svg>
      </>

}
      </>
  )
}

export default AddCustomerForm