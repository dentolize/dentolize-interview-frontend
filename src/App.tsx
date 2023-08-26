import { Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './pages/Home';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import { Error404 } from './pages/Error404';
import { DefaultLayout } from "./layout/DefaultLayout"
import { CreateCustomer } from './pages/CreateCustomer';

function App() {

  return (
    <>

<DefaultLayout>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/create" element={<CreateCustomer/>}/>
      <Route path="/:id" element={<Customer/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
</DefaultLayout>
    </>
)
}

export default App;
