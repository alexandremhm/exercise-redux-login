import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actionLogin } from '../actions/actionLogin';

function Home (props) { 
  const { setLogin } = props
  const history = useHistory();
  
  
  const routeChange = (event) =>{ 
    const emailValid = email.current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const passwordValid = password.current.value.length >= 6;
    event.preventDefault();
    let path = `/clients`;
      if (!emailValid){
     return alert('Email não é válido')
    } else if (!passwordValid) {
      return alert('Senha não é válida')
    }    
    return history.push(path);
  }

  const email = React.createRef();
  const password = React.createRef();


 
    return (
      <div>
        <form action="" method="GET">
          <input type="email" ref={email} name="email" placeholder="email" onChange={ (event) => setLogin(event.target.value)}/>
          <input type="password" ref={password} name="password" placeholder="password" minLength="6" />
          <button type="submit" onClick={ routeChange }>
            Login
          </button>
        </form>    
      </div>
    )  
}


const mapDispatchToProps = (dispatch) => ({
  setLogin: (login) => dispatch(actionLogin(login)),  
})


export default connect(null, mapDispatchToProps)(Home);