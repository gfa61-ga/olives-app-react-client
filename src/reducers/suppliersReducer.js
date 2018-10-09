import {
  SUPPLIER_UPDATE
} from '../constants/actionTypes';

import { schema, normalize } from 'normalizr';

const suppliers = [
  {
    "_id": "5bafad8291962e30f8c37b06",
    "lastName": "ΤΣΑΚΑΝΙΚΑΣ",
    "firstName": "ΧΡΗΣΤΟΣ Τ. ΝΙΚ.",
    "address": "ΕΥΗΝΟΧΩΡΙ",
    "taxIdentifNum": "030801152",
    "phoneNumbers": [
      "6973343647",
      "6973343648"
    ],
    "bankAccounts": [
      "ΕΤΕ 412/755600-47",
      "ΠΕΙΡ 412/755600-48"
    ],
    "pickupsIds": [
      "5bafc3660ddd6421e89fd4ee",
      "5bafcb7f0ddd6421e89fd4f0",
      "5bafcf690ddd6421e89fd4f2"
    ],
    "invoicesIds": [
      "5bafc9690ddd6421e89fd4ef"
    ]
  },
  {
    "_id": "5bafae9191962e30f8c37b07",
    "lastName": "ΝΙΚΟΛΑΟΥ",
    "firstName": "ΣΠΥΡΟΣ Τ. ΔΙΟΝ.",
    "address": "",
    "taxIdentifNum": "135952259",
    "phoneNumbers": [],
    "bankAccounts": [],
    "pickupsIds": [
      "5bafd1af0ddd6421e89fd4f3"
    ],
    "invoicesIds": []
  }
];

const supplierSchema = new schema.Entity(
  'supplier',
  undefined,
  {
    idAttribute: '_id'
  }
);

const normalizedSuppliers = normalize(suppliers, [supplierSchema]);
const INITIAL_SUPPLIERS_STATE = {
  entities: normalizedSuppliers.entities.supplier,
  ids: normalizedSuppliers.result,
};

const applyUpdateSupplier = (state, action) => ({
  entities: {...state.entities, [action.updatedSupplierEntity._id]: action.updatedSupplierEntity},
  ids: [...state.ids]
});

function suppliersReducer(state = INITIAL_SUPPLIERS_STATE, action) {
  switch(action.type) {
    case SUPPLIER_UPDATE : {
      return applyUpdateSupplier(state, action);
    }
    default : return state;
  }
}

export default suppliersReducer;