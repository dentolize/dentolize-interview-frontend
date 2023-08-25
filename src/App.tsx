import { Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './pages/Home';
import Customer from './pages/Customer';
import Customers from './pages/Customers';
import { Error404 } from './pages/Error404';
import Header from './components/Header';

function App() {

  return (
    <>
    <div>

    <Header/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/:id" element={<Customer/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </>
)
}

export default App;
