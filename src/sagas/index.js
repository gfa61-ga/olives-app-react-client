// Create and export rootSaga as watchAll
import { takeEvery, all } from 'redux-saga/effects';
import { SUPPLIERS_FETCH, SUPPLIER_PUT_UPDATE, SUPPLIER_POST_ADD } from '../constants/actionTypes';
import { handleFetchSuppliers, handleSupplierPutUpdate, handleSupplierPostAdd } from './suppliers';
import { listenServerSaga } from './realTimeConnect';


function *watchAll() {
  yield all([
    listenServerSaga(),
    takeEvery(SUPPLIERS_FETCH, handleFetchSuppliers),
    takeEvery(SUPPLIER_PUT_UPDATE, handleSupplierPutUpdate),
    takeEvery(SUPPLIER_POST_ADD, handleSupplierPostAdd),
  ])
}

export default watchAll;
