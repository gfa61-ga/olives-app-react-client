const HN_BASE_URL = 'http://localhost:3500/suppliers';

const fetchSuppliers = query =>
  fetch(HN_BASE_URL)
    .then(response => response.json());

export {
  fetchSuppliers,
};