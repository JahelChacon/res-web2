
import './App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Rutas } from "./Rutas";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logOut } from './store/actions/user';
import "./css/css.css";


function App({ usuarioLogueado, tokenUsuario, signOut }) {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        {usuarioLogueado && <Link className="navbar-brand" to="/">Resturante</Link>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {(usuarioLogueado && usuarioLogueado.administradorSistema) &&
              <React.Fragment>
                <Link className="nav-link" to="/Ayuda">Ayuda</Link>
                <Link className="nav-link" to="/menu">Menú</Link>
              </React.Fragment>
            }
          </Nav>
          {usuarioLogueado ?
            <Nav>
              <Navbar.Text className="mr-3 text-light">Usuario {usuarioLogueado.nombre}</Navbar.Text>
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
        <Rutas usuario={usuarioLogueado} token={tokenUsuario} />
      </div>
    </div >
  );
}

const mapStateToProps = (state) => ({
  usuarioLogueado: state.userReducer ? state.userReducer.usuario : false,
  tokenUsuario: state.userReducer ? state.userReducer.usuarioToken : false,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
