import React from 'react';
import './App.css';
import Suppliers from './Suppliers';
import SupplierForm from './SupplierForm';

const getInitialValues = (supplier) => {
  return {
    lastName: supplier.lastName,
    firstName: supplier.firstName
  }
}

const App = ({ suppliers }) =>
    <div className="app">
      <div className="container">
        <div className="menu">menu</div>
        <div className="search">search area</div>
        <div className="list"><Suppliers suppliers={suppliers} /></div>
        <div className="details"><SupplierForm supplier={suppliers[0]} initialValues={getInitialValues(suppliers[0])}/></div>
      </div>
    </div>

export default App;