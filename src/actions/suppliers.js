import {
  SUPPLIER_SELECT,
  SUPPLIERS_FETCH,
  SUPPLIERS_ADD_TO_STATE,
  SUPPLIER_ADD,
  SUPPLIER_UPDATE,
  SUPPLIER_PUT_UPDATE,
  SUPPLIER_POST_ADD
} from '../constants/actionTypes';

const doSupplierSelect = selectedSupplierId => ({
  type: SUPPLIER_SELECT,
  selectedSupplierId,
});

const doSupplierUpdate = updatedSupplierEntity => ({
  type: SUPPLIER_UPDATE,
  updatedSupplierEntity,
});

const doAddSuppliers = suppliers => ({
  type: SUPPLIERS_ADD_TO_STATE,
  suppliers,
});

const doFetchSuppliers = query => ({
  type: SUPPLIERS_FETCH,
  query,
});

const doSupplierPutUpdate = updatedSupplierEntity => ({
  type: SUPPLIER_PUT_UPDATE,
  updatedSupplierEntity,
});

const doSupplierPostAdd = newSupplier => ({
  type: SUPPLIER_POST_ADD,
  newSupplier,
});

const doSupplierAdd = (newSupplierId, newSupplier) => ({
  type: SUPPLIER_ADD,
  data: {
    _id: newSupplierId,
    newSupplier,
  }
});

export {
  doSupplierSelect,
  doSupplierUpdate,
  doAddSuppliers,
  doFetchSuppliers,
  doSupplierPutUpdate,
  doSupplierPostAdd,
  doSupplierAdd
};