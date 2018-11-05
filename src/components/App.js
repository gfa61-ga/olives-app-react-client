import React from 'react';
import './App.css';
import Suppliers from './Suppliers';
import SupplierForm from './SupplierForm';
import { connect } from 'react-redux';
import { doFetchSuppliers } from '../actions/suppliers';

class App extends React.Component {

  state = {
 //   selectedSupplierId: this.props.entities[0]._id
  };

  selectSupplier = (id) => {
     this.setState({
      selectedSupplierId: id
    });
  }

componentDidMount() {
  this.props.onFetchSuppliers('');
/*
  function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "omit", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }


  postData(`http://localhost:3500/suppliers/add`, {"_id": Math.floor(Math.random() * Math.floor(9999)), "lastName": "Geo Al"})
    .then(data => window.alert(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => window.alert('postData error: ' + error));
*/
}

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="menu">menu</div>
          <div className="search">search area</div>
          <div className="list">
            <Suppliers
              suppliers={this.props.suppliers}
              selectSupplier={this.selectSupplier}
              selectedSupplierId={this.state.selectedSupplierId}
            />
          </div>
          <div className="details">
            <SupplierForm
              selectSupplier={this.selectSupplier}
              selectedSupplierId={this.props.selectedSupplierId}
              initialValues={this.props.suppliers.entities[this.props.suppliers.ids.filter(id =>
                id === this.props.selectedSupplierId)[0]]
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

// Add onFetchSuppliers() to App props
const mapDispatchToProps = (dispatch) => ({
  // Dispatch SUPPLIERS_FETCH action to state, to fetch suppliers from API server
  // and store them in state.suppliersState
  onFetchSuppliers: query => dispatch(doFetchSuppliers(query)),
});

// Add selectedSupplierId and suppliers to App's props
const mapStateToProps = state => ({
  selectedSupplierId: state.appState.selectedSupplierId,
  suppliers: state.suppliersState
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
