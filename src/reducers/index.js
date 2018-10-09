import { combineReducers } from 'redux';
import suppliersReducer from './suppliersReducer';
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  suppliersState: suppliersReducer,
  appState: appReducer
});

export default rootReducer;