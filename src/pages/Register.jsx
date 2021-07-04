import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionClient } from '../actions/actionClient';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleClick(props) {
    const { setClient } = this.props;
    const { name, age, email } = this.state;
    const newObj = {
      name,
      age,
      email,
    }
    setClient(newObj);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    const { login } = this.props;
    const { name, age, email } = this.state;
     
    return (
      <div>
        { login === '' && <Redirect to="/loggedout" />}
        <p>{login}</p>
        <input type="text" name="name" value={name} placeholder="name" onChange={ (event) => this.handleInput(event)} />
        <input type="email" name="email" value={email} placeholder="email" onChange={ (event) => this.handleInput(event)} />
        <input type="number" name="age" value={age} placeholder="age" onChange={ (event) => this.handleInput(event)} />
        <button type="button" onClick={this.handleClick}>Cadastrar</button>
        <Link to="/clients">Clients</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
})

const mapDispatchToProps = (dispatch) => ({
  setClient: (client) => dispatch(actionClient(client)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
