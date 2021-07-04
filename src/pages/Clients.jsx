import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
class Clients extends Component {
  constructor() {
    super();
    this.removeClient = this.removeClient.bind(this);
  }

  removeClient(event) {
    return event.target.parentElement.remove();
  }

  render() {
    const { login, clients } = this.props;
    return (
      <div>
        { login === '' && <Redirect to="/loggedout" />}
        <p>{login}</p>
        { clients.length === 0 && <p>Nenhum Cliente Cadastrado</p> }
        { clients && clients.map((client, index) => 
          <div key={index}>{ `${client.name} ${client.email} ${client.age}`}
          <button onClick={this.removeClient}>X</button>
          </div>)}
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
