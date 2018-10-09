import React from 'react';
import './SupplierForm.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { doSupplierSelect } from '../actions/suppliers';
import { doSupplierUpdate } from '../actions/suppliers';

let supplier = {};
const submit = (values) => {
//  window.alert(`Data submitted for update or for new Supplier:\n${JSON.stringify(values, null, 2)}`)
  supplier = values;
}

class SupplierForm extends React.Component {

  onSubmit = (event) => {
    console.log(this.props.storeState);
    event.preventDefault();
  }

  onCreateNewSupplier = (event) => {
    event.preventDefault();
    window.alert('You submitted new supplier:');
    this.props.handleSubmit();
  }

  onUpdateSupplier = (event) => {
    this.props.updateSupplier(this.props.values);
    event.preventDefault();
  }

  LABELS = {
    lastName: 'Επώνυμο',
    firstName: 'Ονομα',
    address: 'Διεύθυνση',
    taxIdentifNum: 'ΑΦΜ',
    phoneNumbers: 'Αριθμοί τηλεφώνου (αριθμός1, αριθμός2 ...)',
    bankAccounts: 'Τραπεζικοί Λογαριασμοί (λογαριασμός1, λογαριασμός2 ...)'
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.updateSupplier)}>
        {Object.keys(this.LABELS).map(key =>
          <div key={key} className="input-item">
            <label className="label">{this.LABELS[key]}</label>
            <div>
              <Field
                className="input"
                name={key}
                type="text"
                component="input"
                placeholder={this.LABELS[key]}
              />
            </div>
          </div>
        )}

        <div className="form-buttons">
          <button
            className="button is-success"
            type="submit"
          >
            Αποθήκευση
          </button>
          <button
            className="button is-light"
            type="button"
            onClick={this.props.reset}
          >
            Eπαναφορά
          </button>
          <button
            className="button is-success is-pulled-right"
            type="button"
            onClick={() => {this.props.selectFirstSupplier('')}}
          >
            Προσθήκη Πελάτη
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => (
  {
    storeState: state
  }
);

const mapDispatchToProps = dispatch => ({
  selectFirstSupplier: (id) => dispatch(doSupplierSelect(id)),
  updateSupplier: (updatedSupplierEntity) => dispatch(doSupplierUpdate(updatedSupplierEntity))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(
  reduxForm({
    form: 'supplier', // a unique identifier for this form
    enableReinitialize: true,
    onSubmit: submit
  })(SupplierForm)
);