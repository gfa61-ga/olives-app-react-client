import React from 'react';
import './Suppliers.css';
import Supplier from './Supplier';

const Suppliers = ({ suppliers }) =>
  <div className="suppliers">
  {(suppliers || []).map(supplier =>
    <Supplier
      key={supplier._id}
      supplier={supplier}
    />
  )}
  </div>

export default Suppliers;