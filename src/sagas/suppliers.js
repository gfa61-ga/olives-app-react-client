// Create sagas for suppliers
import { call, put } from 'redux-saga/effects';
import { doAddSuppliers, doSupplierAdd, doSupplierUpdate } from '../actions/suppliers';
import { fetchSuppliers, updateSupplier, addSupplier } from '../api/suppliers';

function* handleFetchSuppliers(action) {
  const { query } = action;

  try {
    const result = yield call(fetchSuppliers, query);
    yield put(doAddSuppliers(result));
  } catch (error) {
    //yield put(doAddSuppliers(error));
  }
}

function* handleSupplierPutUpdate(action) {
  const { updatedSupplierEntity } = action;

  try {
    const result = yield call(updateSupplier, updatedSupplierEntity);
    if (result.n === 1) {
      yield put(doSupplierUpdate(updatedSupplierEntity));
    }
  } catch (error) {
    //yield put(doSupplierUpdate(error));
  }
}

function* handleSupplierPostAdd(action) {
  const { newSupplier } = action;

  try {
    const result = yield call(addSupplier, newSupplier);
    if (result.n === 1) {
      yield put(doSupplierAdd(result._id, newSupplier));
    }
  } catch (error) {
    //yield put(doSupplierAdd(error));
  }
}

export {
  handleFetchSuppliers, handleSupplierPutUpdate, handleSupplierPostAdd
};