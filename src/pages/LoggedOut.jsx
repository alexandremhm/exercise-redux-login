import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoggedOut extends Component {
  render() {
    return (
      <div>
        <p>Login não efetuado</p>
        <Link to="/">Faça login</Link>
      </div>
    )
  }
}
