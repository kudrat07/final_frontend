import './App.css';
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp"
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"
import Products from './components/Products/Products';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Address from './components/Address/Address';
import Payment from './components/Payment/Payment';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
import Profile from "./components/Profile/Profile"

function App() {


  return (
    <div>
    <BrowserRouter future={{ 
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }}>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='/address' element={<Address/>} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/order-success' element={<OrderSuccess/>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  
  )
}

export default App
