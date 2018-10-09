import React from 'react';
import './App.css';
import Suppliers from './Suppliers';
import SupplierForm from './SupplierForm';
import { connect } from 'react-redux';

class App extends React.Component {

  state = {
 //   selectedSupplierId: this.props.entities[0]._id
  };

  selectSupplier = (id) => {
     this.setState({
      selectedSupplierId: id
    });
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

const mapStateToProps = state => ({
  selectedSupplierId: state.appState.selectedSupplierId,
  suppliers: state.suppliersState
});

export default connect(
  mapStateToProps
)(App);
