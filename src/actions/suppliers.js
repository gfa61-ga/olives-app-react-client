import {
  SUPPLIER_SELECT,
  SUPPLIER_FETCH,
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


export {
  doSupplierSelect,
  doSupplierUpdate
};