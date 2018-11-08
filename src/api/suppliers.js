/****** uncomment line 3 or line 6 *******/

const HN_BASE_URL = 'https://olives-app.herokuapp.com/suppliers/'

// To run API server in localhost:
// const HN_BASE_URL = 'http://localhost:3500/suppliers/';

const fetchSuppliers = query =>
  fetch(HN_BASE_URL)
    .then(response => response.json());

/*  This is just an HTTP response of course, not the actual JSON.
  To extract the JSON body content from the response,we use the json() method
  (which is implemented by both the Request and Response objects.)
*/

const updateSupplier = updatedSupplierEntity =>
  fetch(HN_BASE_URL + 'update/' + updatedSupplierEntity._id, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(updatedSupplierEntity)
  }).then(response => response.json());

const addSupplier = (newSupplier) =>
  fetch(HN_BASE_URL + 'add/', {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newSupplier)
  }).then(response => response.json());

export {
  fetchSuppliers, updateSupplier, addSupplier
};