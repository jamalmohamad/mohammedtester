import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactLogo from "../../src/mylogo.svg";
import GithubLogo from "../../src/utils/github.png";
import LinkedinLogo from "../../src/utils/linkedin.gif";
import { About } from "./about";
import { Article } from "./article";


export function Home() {
  return (
    <Container className="custom-container">
      <Row>
        <Col sm={3} className="custom-box about">
        <Navbar.Brand href="">
            {/* <img src={ReactLogo} width="10%" alt="React Logo" /> */}
            <h2 className="custom-h2">Mohámád A. </h2>
            
          </Navbar.Brand>
          <About></About>

          <Stack gap={2}>
            {/* <div className="bg-light">Home</div>
            <div className="bg-light">Articles</div>
            <div className="bg-light">Open Source Projects</div> */}
            {/* <div className="bg-light">
                Linkedin, github
            </div> */}
            </Stack>

            {/* <a href="https://www.linkedin.com/in/moh%C3%A1m%C3%A1d-7b8044173/">
                <img src={LinkedinLogo} width="40rem;"/>
            </a> */}
            <a href="https://github.com/jamalmohamad">
                <img src={GithubLogo} width="40rem;"/>
            </a>

            <p>Copyrights 2022</p>


        </Col>
        <Col sm={9} className="custom-box2">

        <div className="custom-ar-h">
        <h6 >Articles</h6>

        </div>
            <Article></Article>
        </Col>
      </Row>
    </Container>
  );
}
