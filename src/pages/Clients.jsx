import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
class Clients extends Component {
  render() {
    const { login, clients } = this.props;
    return (
      <div>
        { login === '' && <Redirect to="/loggedout" />}
        <p>{login}</p>
        { clients.length === 0 && <p>Nenhum Cliente Cadastrado</p> }
        { clients !== undefined && clients.map((client) => <div>{ `${client.name} ${client.email} ${client.age}`}</div>)}
        <Link to="/register">Register</Link>  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clients: state.signUpReducer.clients,
})

export default connect(mapStateToProps, null)(Clients);
