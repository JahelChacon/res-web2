
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
 
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand to="/">Restaurante</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> 
      
      
    </Nav>
    <Nav>
      <Nav.Link to="/">Ayuda</Nav.Link>
      <Nav.Link to="/menu">Menú</Nav.Link>
      <Nav.Link to="/login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4">
          <div className="card">
            <div className="card-header text-white bg-primary">Texto</div>
            <div className="card-body">
              Texto
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
