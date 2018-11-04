const HN_BASE_URL = 'https://olives-app.herokuapp.com/suppliers/' // 'http://localhost:3500/suppliers/';

const fetchSuppliers = query =>
  fetch(HN_BASE_URL)
    .then(response => response.json());

/*  This is just an HTTP response of course, not the actual JSON.
  To extract the JSON body content from the response,we use the json() method
  (which is implemented by both the Request and Response objects.)
*/

export {
  fetchSuppliers,
};