import React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="menus" element={<MenuPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>

    </div>
  );
};

export default App;
