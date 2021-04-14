
import './App.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Rutas } from "./Rutas";
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
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
            {(usuarioLogueado) &&
              <React.Fragment>
                {
                  !usuarioLogueado.administradorCuentas &&
                  <NavDropdown title="Ayuda" id="basic-nav-dropdown">
                    {
                      usuarioLogueado.administradorSistema ?
                        <Link to="/ayuda" className="dropdown-item">Sistema</Link>
                        : usuarioLogueado.administradorSeguridad ?
                          <NavDropdown.Item to="/reporte-reguridad">Seguridad</NavDropdown.Item>
                          : usuarioLogueado.administradorRestaurante &&
                          <React.Fragment>
                            <NavDropdown.Item to="/reporte-restaurante">Resturante</NavDropdown.Item>
                            <NavDropdown.Item to="/reporte-licor">Licor</NavDropdown.Item>
                            <NavDropdown.Item to="/reporte-vinos">Vinos</NavDropdown.Item>
                          </React.Fragment>
                    }
                  </NavDropdown>
                }
                {
                  usuarioLogueado.administradorRestaurante && 
                  <NavDropdown title="Procesos" id="basic-nav-dropdown">
                    <Link to="procesos-mesas" className="dropdown-item">Mesas</Link>
                    <Link to="procesos-barras" className="dropdown-item">Barras</Link>
                  </NavDropdown>
                }
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
        <Rutas usuario={usuarioLogueado} token={tokenUsuario} logout={signOut}/>
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
