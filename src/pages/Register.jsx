import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionName } from '../actions/actionName';
import { actionAge } from '../actions/actionAge';
import { actionEmail } from '../actions/actionEmail';
import { actionClient } from '../actions/actionClient';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }
  render() {
    const { setAge, setEmail, setName, name, age, email, setClient } = this.props;
    const clientObject = {
      name,
      age,
      email,
    }
     
    return (
      <div>
        <input type="text" name="name" placeholder="name" onChange={ (event) => setName(event.target.value)} />
        <input type="email" name="email"placeholder="email" onChange={ (event) => setEmail(event.target.value)} />
        <input type="number" name="age" placeholder="age" onChange={ (event) => setAge(event.target.value)} />
        <button onClick={() => setClient(...clientObject)}>Cadastrar</button>
        <Link to="/clients">Clients</Link>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(actionName(name)),
  setAge: (age) => dispatch(actionAge(age)),
  setEmail: (email) => dispatch(actionEmail(email)),
  setClient: (client) => dispatch(actionClient(client)),

})

const mapStateToProps = (state) => ({
  name: state.signUpReducer.name,
  email: state.signUpReducer.email,
  age: state.signUpReducer.age,
})


export default connect(mapStateToProps, mapDispatchToProps)(Register);
