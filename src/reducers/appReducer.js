import {
  SUPPLIER_SELECT, SUPPLIER_ADD
} from '../constants/actionTypes';

const INITIAL_STATE = {selectedSupplierId: ''};

const applySelectSupplier = (state, action) => ({
  ...state,
  selectedSupplierId: action.selectedSupplierId
});

const applySetSelectedSupplierId = (state, action) => ({
  ...state,
  selectedSupplierId: action.data._id
});

function appReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SUPPLIER_SELECT : {
      return applySelectSupplier(state, action);
    }
    case SUPPLIER_ADD : {
      return applySetSelectedSupplierId(state, action);
    }
    default : return state;
  }
}

export default appReducer;