import React from 'react';
import './SupplierForm.css';
import { Field, reduxForm, FieldArray, isDirty } from 'redux-form';
import { connect } from 'react-redux';
import { doSupplierSelect } from '../actions/suppliers';
import { doSupplierPutUpdate } from '../actions/suppliers';
import { doSupplierPostAdd } from '../actions/suppliers';

/*
let supplier = {};

const submit = (values) => {
//  window.alert(`Data submitted for update or for new Supplier:\n${JSON.stringify(values, null, 2)}`)
  supplier = values;
}
*/
const renderFields = ({ fields}) =>
  <ul>
    <li>
      <button type="button" className="button is-small" onClick={() => fields.push()}>
        Προσθήκη
      </button>
    </li>
    {fields.map((field, index) =>
      <li key={index}>
        <Field
          className="input is-small"
          style={{width: '50%'}}
          name={field}
          type="text"
          component="input"
        />
        <button
          type="button"
          className="button is-small"
          onClick={() => fields.remove(index)}
        >
          Διαγραφή
        </button>
      </li>
    )}
  </ul>

class SupplierForm extends React.Component {

  onSubmit = (event) => {
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
  };

  LABELS_OF_ARRAYS = {
    phoneNumbers: 'Αριθμοί τηλεφώνου',
    bankAccounts: 'Τραπεζικοί Λογαριασμοί'
  };

  render() { // TO FIND OUT: handleSubmit calls updateSupplier(), passing form.values as parameter
    return (
      <form onSubmit={
        this.props.storeState.appState.selectedSupplierId !== '' ?
        this.props.handleSubmit(this.props.updateSupplier) :
        this.props.handleSubmit(this.props.addSupplier)
      }>

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

        {Object.keys(this.LABELS_OF_ARRAYS).map(key =>
          <div key={key} className="input-item">
            <label className="label">{this.LABELS_OF_ARRAYS[key]}</label>
            <div>
              <FieldArray name={key} component={renderFields} />
            </div>
          </div>
        )}

        <div className="form-buttons">
          <button
            disabled={!this.props.dirty}
            className="button is-success"
            type="submit"
          >
            Αποθήκευση Αλλαγών
          </button>
          <button
            className="button is-light"
            type="button"
            onClick={this.props.reset}
          >
            Ακύρωση Αλλαγών
          </button>
          <button
            className="button is-success is-pulled-right"
            type="button"
            onClick={() => {
              this.props.selectFirstSupplier('');
            }}
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
    dirty: isDirty('supplier')(state),
    storeState: state
  }
);

const mapDispatchToProps = dispatch => ({
  selectFirstSupplier: (id) => dispatch(doSupplierSelect(id)),
  updateSupplier: (updatedSupplierEntity) => dispatch(doSupplierPutUpdate(updatedSupplierEntity)),
  addSupplier: (newSupplier) => dispatch(doSupplierPostAdd(newSupplier)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(
  reduxForm({
    form: 'supplier', // a unique identifier for this form
    enableReinitialize: true,
    onSubmit: this.onSubmit
  })(SupplierForm)
);