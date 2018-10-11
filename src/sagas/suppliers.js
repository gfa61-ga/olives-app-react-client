import { call, put } from 'redux-saga/effects';
import { doAddSuppliers } from '../actions/suppliers';
import { fetchSuppliers } from '../api/suppliers';

function* handleFetchSuppliers(action) {
  const { query } = action;

  try {
    const result = yield call(fetchSuppliers, query);
    yield put(doAddSuppliers(result));
  } catch (error) {
    //yield put(doFetchErrorStories(error));
  }
}

export {
  handleFetchSuppliers,
};