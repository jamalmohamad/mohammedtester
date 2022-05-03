import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import ReactLogo from "../src/mylogo.svg";

import "./App.css";
import { Home } from "./components/home";

function App() {
  return (
    <div className="App">
      {/* <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">
            <img src={ReactLogo} width="50%" alt="React Logo" />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">Home</Nav.Link>
              {/* <Nav.Link href="#resume">Resume</Nav.Link> 
              <Nav.Link href="#development">Development</Nav.Link>
              <Nav.Link href="#pricing">Testing</Nav.Link>
              <Nav.Link href="#articles">Articles</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Home></Home>
    </div>
  );
}

export default App;
