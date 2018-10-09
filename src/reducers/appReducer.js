import {
  SUPPLIER_SELECT
} from '../constants/actionTypes';

const INITIAL_STATE = {selectedSupplierId: ''};

const applySelectSupplier = (state, action) => ({...state, selectedSupplierId: action.selectedSupplierId});

function appReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SUPPLIER_SELECT : {
      return applySelectSupplier(state, action);
    }
    default : return state;
  }
}

export default appReducer;