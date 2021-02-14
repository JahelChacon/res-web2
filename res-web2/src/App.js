
import './App.css';
import React, { useState, useEffect } from "react";
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
          <Nav className="mr-auto">
            {usuario.administradorSistema &&
              <React.Fragment>
                <Link className="nav-link" to="/Ayuda">Ayuda</Link>
                <Link className="nav-link" to="/menu">Menú</Link>
              </React.Fragment>
            }
          </Nav>
          {usuario ?
            <Nav>
              <Navbar.Text className="mr-3 text-light">Usuario {usuario.nombre}</Navbar.Text>
              <Button className="nav-link" variant="outline-secondary" onClick={() => signOut()}>Logout</Button>
            </Nav>
            :
            <Nav>
              <Link className="nav-link" to="/login">Login</Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar >
      <div className="container-fluid padding">
        <Rutas usuario={usuario} token={token} />
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
