import {
  SUPPLIER_SELECT,
  SUPPLIERS_FETCH,
  SUPPLIERS_ADD_TO_STATE,
  SUPPLIER_ADD,
  SUPPLIER_UPDATE
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

export {
  doSupplierSelect,
  doSupplierUpdate,
  doAddSuppliers,
  doFetchSuppliers
};