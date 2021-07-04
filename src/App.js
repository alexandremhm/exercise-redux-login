import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Clients from './pages/Clients';
import Register from './pages/Register';
import LoggedOut from './pages/LoggedOut';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/clients" component={ Clients } />
      <Route path="/register" component={ Register } />
      <Route path="/loggedout" component={ LoggedOut} />
    </BrowserRouter>
   
  );
}

export default App;
