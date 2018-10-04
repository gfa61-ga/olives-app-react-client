import React from 'react';
import './App.css';
import Suppliers from './Suppliers';
import SupplierForm from './SupplierForm';

const App = ({ suppliers }) =>
  <div className="app">
    <div className="container">
    <div className="item1">menu</div>
    <div className="item2">search area</div>
    <div className="item3"><Suppliers suppliers={suppliers} /></div>
    <div className="item4"><SupplierForm suppliers={suppliers}/></div>
</div>
  </div>

export default App;