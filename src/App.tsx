import { Routes, Route, Link, NavLink } from 'react-router-dom';

import "./App.css";
import { GETallCustomers } from "./api/data";
import Home from './pages/Home';
import Customers from './pages/Customers';
import Customer from './pages/Customer';

function App() {

  return (
    <>
    <nav>
      <NavLink to={"/customers"}>To Dashboard</NavLink>
    </nav>
    <div>Header goes here...</div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="customers/:id" element={<Customer/>}/>
    </Routes>
    </>
)
}

export default App;
