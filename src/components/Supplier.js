import React from 'react';
import './Supplier.css';
import { connect } from 'react-redux';
import { doSupplierSelect } from '../actions/suppliers';

const Supplier = ({ supplier, selectSupplier, selectedSupplierId}) => {
  const {
    _id,
    lastName,
    firstName,
  } = supplier;

  return (
    <div
      className={'supplier ' + (_id === selectedSupplierId ? 'selected' : '')}
      tabIndex="0"
      onClick={() => selectSupplier(_id)}
    >
      <span>{lastName}</span>
      <span>{firstName}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  selectSupplier: _id => dispatch(doSupplierSelect(_id)),
});

export default connect(
  null,
  mapDispatchToProps
)(Supplier);
