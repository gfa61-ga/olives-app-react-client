import React from 'react';

class SupplierForm extends React.Component {
  state = {
    form: {
      lastName: this.props.suppliers[0].lastName,
      firstName: this.props.suppliers[0].firstName
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

  onSubmit = (event) => {
    const { form } = this.state;
    // do something with the search value
    // e.g. propagate it up to the parent component
    console.log(form);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChangeLastName}
          type="text"
          value={this.state.form.lastName}
        />
        <input
          onChange={this.onChangeFirstName}
          type="text"
          value={this.state.form.firstName}
        />
        <br/>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default SupplierForm;