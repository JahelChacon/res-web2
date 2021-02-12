
import './App.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Rutas } from "./Rutas";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logOut } from './store/actions/user';
import "./css/css.css";


function App({ usuarioLogueado, tokenUsuario, signOut }) {
  const [usuario, setUsuario] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    setUsuario(usuarioLogueado);
    setToken(tokenUsuario);
  }, [usuarioLogueado, tokenUsuario]);

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        {usuario && <Link className="navbar-brand" to="/">Resturante</Link>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {usuario && < Link className="nav-link" to="/Ayuda">Ayuda</Link>}
            {usuario && < Link className="nav-link" to="/menu">Menú</Link>}
            {
              usuario
                ?
                <Button className="nav-link" variant="info" onClick={() => signOut()}>Logout</Button>
                :
                <Link className="nav-link" to="/login">Login</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar >

      <div className="container-fluid padding">
        <Rutas usuario={usuario} token={token}/>
      </div>
    </div >
  );
}

const mapStateToProps = (state) => ({
  usuarioLogueado: state.userReducer ? state.userReducer.usuario : [],
  tokenUsuario: state.userReducer ? state.userReducer.usuarioToken : [],
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
