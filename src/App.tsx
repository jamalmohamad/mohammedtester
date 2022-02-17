import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ReactLogo from '../src/mylogo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
  <img src={ReactLogo} width="80%" alt="React Logo" />

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#pricing">Automation Testing</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



      <header className="App-header">
        <p>Hello, my name is,</p>
        <h1>Mohammed</h1>    
        <p>Software Developer | Automation Tester | Computer Scientist</p>
        <Button>Contact</Button>
      </header>
    </div>
  );
}

export default App;
