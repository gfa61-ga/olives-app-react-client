import React from 'react';
import './SupplierForm.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SupplierForm extends React.Component {

/*
  state = {
    form: {
      lastName: this.props.supplier.lastName,
      firstName: this.props.supplier.firstName
    }
  };

  onChangeLastName = (event) => {
    const { value } = event.target;
    this.setState({
      form: {firstName: this.state.form.firstName, lastName: value}
    });
  }

  onChangeFirstName = (event) => {
    const { value } = event.target;
    this.setState({
      form: {lastName: this.state.form.lastName, firstName: value}
    });
  }
*/

  onSubmit = (event) => {
//  const { form } = this.state;
    // do something with the search value
    // e.g. propagate it up to the parent component
//  console.log(form);
    console.log(this.props.storeState);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <div className="input-item">
          <label className="label">Επώνυμο</label>
          <div>
            <Field
              className="input"
commnet={""/*              onChange={this.onChangeLastName} */}
              name="lastName"
              type="text"
              component="input"
              placeholder="Επώνυμο"
            />
          </div>
        </div>
        <div className="input-item">
          <label className="label">Ονομα</label>
          <div>
            <Field
              className="input"
comment={""/*}              onChange={this.onChangeFirstName} */}
              name="firstName"
              type="text"
              component="input"
              placeholder="Ονομα"
            />
          </div>
        </div>
        <div className="form-buttons">
          <button className="button is-success" type="submit">
            Υποβολή
          </button>
          <button className="button is-light" type="button">
            Eπαναφορά
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

export default connect(
    mapStateToProps)(
  reduxForm({
    form: 'supplier' // a unique identifier for this form
  })(SupplierForm)
);