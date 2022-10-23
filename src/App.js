
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
//Context:
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
  return (
   <ProductContextProvider>
    <CartContextProvider>
    <Navbar />
      <Routes>
      <Route path="/aboutus" element={<About/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/cart" element={<ShopCart/> }/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/*" element= {<Navigate to="/products" />} />
      </Routes>
      <Footer />
    </CartContextProvider>
   </ProductContextProvider>
  );
}

export default App;
