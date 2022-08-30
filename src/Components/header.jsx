import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import Button from "react-bootstrap/Button";
import "./header.css";

function Header() {
  return (
    <Navbar className="color-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">
          <img alt="" src={Logo} width="10%" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./dashboard">
              <Button variant="primary">Home</Button>
            </Nav.Link>
            <Nav.Link href="/login">
              <Button variant="primary">LogOut</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
