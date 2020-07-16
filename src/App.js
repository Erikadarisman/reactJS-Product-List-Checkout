import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ProductList from './Pages/ProductList/ProductList';
import CheckOut from './Pages/CheckOut/CheckOut';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <Route path="/" component={ProductList} exact/>
      <Route path="/checkout" component={CheckOut} exact/>
    </div>
  );
}

export default App;
