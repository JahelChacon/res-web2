
import './App.css';
import { Link } from 'react-router-dom';
import { Rutas } from "./Rutas";
import { Navbar, Nav } from 'react-bootstrap';
import "./css/css.css";

 
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link className="navbar-brand" to="/">Resturante</Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link className="nav-link" to="/Ayuda">Ayuda</Link>
            <Link className="nav-link" to="/menu">Menú</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container-fluid padding">
        <Rutas />
      </div>
    </div>
  );
}

export default App;
