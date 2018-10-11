import { takeEvery, all } from 'redux-saga/effects';
import { SUPPLIERS_FETCH } from '../constants/actionTypes';
import { handleFetchSuppliers } from './suppliers';

function *watchAll() {
  yield all([
    takeEvery(SUPPLIERS_FETCH, handleFetchSuppliers),
  ])
}

export default watchAll;
