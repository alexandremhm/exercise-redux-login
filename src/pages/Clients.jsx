import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { actionRemove } from '../actions/actionRemove';

class Clients extends Component {
  constructor() {
    super();
    this.state = {
      sorted: false,
    }
    this.removeClient = this.removeClient.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleState() {
    const { sorted } = this.state;
    sorted ? this.setState({
      sorted: false,
    }) : this.setState ({
      sorted: true, 
    })
  }

  removeClient({target}) {
    const { removeClient } = this.props;
    removeClient(parseInt(target.parentElement.id, 10));
    }

  render() {
    const { login, clients } = this.props;
    const newClients = [...clients];
    const { sorted } = this.state;
    const mapArr = clients.map((client, index) => 
          <div id={index} key={index}>{ `${client.name} ${client.email} ${client.age}`}
          <button onClick={this.removeClient}>X</button>          
          </div>)
    const sortedArr = newClients.sort((a, b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0
    }).map((client, index) => 
    <div id={index} key={index}>{ `${client.name} ${client.email} ${client.age}`}
    <button onClick={this.removeClient}>X</button>          
    </div>)
    console.log(clients)
    
    return (
      <div>
        { login === '' && <Redirect to="/loggedout" />}
        <p>{login}</p>
        { clients.length === 0 && <p>Nenhum Cliente Cadastrado</p> }
        { clients && sorted ? sortedArr : mapArr }
          <button onClick={this.handleState}>Sort</button>
        <Link to="/register">Register</Link>  
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  clients: state.signUpReducer.clients,
})

const mapDispatchToProps = (dispatch) => ({
  removeClient: (client) => dispatch(actionRemove(client)),
  }) 

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
