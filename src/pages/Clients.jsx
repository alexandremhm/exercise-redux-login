import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const { login, name, email, age } = this.props;
    const newArr = [name, email, age];
    return (
      <div>
        <p>{login}</p>
        { name.length === 0 && <p>Nenhum Cliente Cadastrado</p> }
        { name.length > 0 && newArr.map(([name, email, age], index) => <div>{ `${name[index]} ${email[index]} ${age[index]}`}</div>)}
        <Link to="/register">Register</Link>  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  name: state.signUpReducer.name,
  email: state.signUpReducer.email,
  age: state.signUpReducer.age,
})

export default connect(mapStateToProps, null)(Clients);
