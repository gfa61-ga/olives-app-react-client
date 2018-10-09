import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './../node_modules/bulma/css/bulma.css';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

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

const products = [
  {
    "_id": "5bafdcda0ddd6421e89fd4f7",
    "description": "Ελιές",
    "piecesPerKg": 120
  }
];

const priceLists = [
  {
    "_id": "5bafdad20ddd6421e89fd4f6",
    "description": "Αρχικός τιμοκατάλογος",
    "year": 2017
  }
];

const productPrices = [
  {
    "_id": "5bafd9310ddd6421e89fd4f5",
    "productId": "5bafdcda0ddd6421e89fd4f7",
    "priceListId": "5bafdad20ddd6421e89fd4f6",
    "price": 1.3
  }
];

const pickups = [
  {
    "_id": "5bafcb7f0ddd6421e89fd4f0",
    "date": "2017-11-16",
    "isPaid": false,
    "pickupDetailsIds": [
      "5bafd79f0ddd6421e89fd4f4"
    ]
  },
  {
    "_id": "5bafc3660ddd6421e89fd4ee",
    "date": "2017-11-1",
    "isPaid": true,
    "pickupDetailsIds": []
  },
  {
    "_id": "5bafcf690ddd6421e89fd4f2",
    "date": "2017-11-26",
    "isPaid": true,
    "pickupDetailsIds": []
  },
  {
    "_id": "5bafd1af0ddd6421e89fd4f3",
    "date": "2017-11-27",
    "isPaid": false,
    "pickupDetailsIds": []
  }
];

const pickupDetails = [
  {
    "_id": "5bafd79f0ddd6421e89fd4f4",
    "productPriceId": "5bafd9310ddd6421e89fd4f5",
    "quantity": 200
  }
];

const invoices = [
  {
    "_id": "5bafc9690ddd6421e89fd4ef",
    "date": "2017-11-21",
    "invoiceNum": 15,
    "pickupsIds": [
      "5bafc3660ddd6421e89fd4ee",
      "5bafcf690ddd6421e89fd4f2"
    ]
  }
];

const filters = [
  {
    "activeYear": 2017,
    "activePriceList": "5bafdad20ddd6421e89fd4f6"
  }
];

ReactDOM.render(
  <Provider store={store}>
    <App
      products={products}
      priceLists={priceLists}
      productPrices={productPrices}
      pickups={pickups}
      pickupDetails={pickupDetails}
      invoices={invoices}
      filters={filters}
    />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
