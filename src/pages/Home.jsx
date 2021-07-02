import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogin } from '../actions/actionLogin';

class Home extends Component {
  // constructor() {
  //   super()
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   event.preventDefault()
  //   return <Redirect to="/clients" />    
  // }

  render() {
    const { setLogin } = this.props;
    return (
      <div>
        <form action="">
          <input type="email" name="email" placeholder="email" onChange={ (event) => setLogin(event.target.value)}/>
          <input type="password" name="password" placeholder="password" minLength="6" />
          <button type="submit" onClick={ this.handleClick }>
            <Link to="/clients">Login</Link>
          </button>
        </form>    
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  setLogin: (login) => dispatch(actionLogin(login)),  
})


export default connect(null, mapDispatchToProps)(Home);