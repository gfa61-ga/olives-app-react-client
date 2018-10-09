import React from 'react';
import './Suppliers.css';
import Supplier from './Supplier';
import { connect } from 'react-redux';
import { doSupplierSelect } from '../actions/suppliers';

const Suppliers = ({ suppliers, selectFirstSupplier, selectedSupplierId }) => {
  /*if (selectedSupplierId==='') {
    selectFirstSupplier(suppliers[0]._id)
  };*/
  return (
    <div className="suppliers">
    {(suppliers.ids || []).map(id =>
      <Supplier
        key={id}
        supplier={suppliers.entities[id]}
        selectedSupplierId={selectedSupplierId}
      />
    )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  selectFirstSupplier: (id) => dispatch(doSupplierSelect(id))
});

const mapStateToProps = state => ({
  selectedSupplierId: state.appState.selectedSupplierId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suppliers);
