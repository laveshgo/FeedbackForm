import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import Button from "react-bootstrap/Button";
import "./header.css";
import AuthenticationService from "./AuthenticationService.js";

const Header = ({ user_id }) => {
  const link = "/dashboard/" + user_id;
  return (
    <Navbar className="color-navbar" expand="lg">
      <Container>
        <Navbar.Brand href={link}>
          <img alt="" src={Logo} width="10%" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={link} name="lavesh">
              <Button variant="primary">Home</Button>
            </Nav.Link>
            <Nav.Link href="./login">
              <Button
                onClick={AuthenticationService.logout}
                variant="primary"
                style={{ width: "90px" }}
              >
                Log Out
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
