
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
//Components:
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import About from './components/About'
import SignUp from './components/SignUp';
import Home from './components/Home';
import NavBarTop from './components/shared/NavBarTop';
import Registration from "../src/components/sample code/Registration"
//Context:
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import LoggedInContextProvider from './context/LoggedInContextProvider';
import Login from './components/Login';


function App() {
  return (
    <LoggedInContextProvider>
    <ProductContextProvider>
    <CartContextProvider>
    <NavBarTop/>
    <Navbar />
      <Routes>
        <Route path="/aboutus" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<ShopCart/> }/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/registration" element={<Registration/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element= {<Navigate to="/products" />} />
      </Routes>
      <Footer />
    </CartContextProvider>
    </ProductContextProvider>
    </LoggedInContextProvider>
  );
}

export default App;
