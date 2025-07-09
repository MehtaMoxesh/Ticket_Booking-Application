import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer>
      <Navbar bg="light" variant="light" expand="lg" fixed="bottom">
        <Container className="justify-content-center align-items-center">
          <Navbar.Brand>
            Copyright &copy;{" "}
            <Link
              to="https://github.com/jameel-webdev"
              className="text-decoration-none text-dark"
            >
              Moxesh Mehta
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default FooterComponent;
