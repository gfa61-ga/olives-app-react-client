import React from 'react';
import './Supplier.css';

const Supplier = ({ supplier }) => {
  const {
    lastName,
    firstName,
/*  address,
    taxIdentifNum,
    phoneNumbers,
    bankAccounts */
  } = supplier;

  return (
    <div className="supplier" tabIndex="0">
      <span>{lastName}</span>
      <span>{firstName}</span>
{/*    <span>{address}</span>
      <span>{taxIdentifNum}</span>
      <span>{phoneNumbers[0]}</span>
      <span>{bankAccounts[0]}</span> */}
    </div>
  );
}

export default Supplier;