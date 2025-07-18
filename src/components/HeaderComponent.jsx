import React, { useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/Users/userApiSlice";
import { useNavigate } from "react-router-dom";
import { removeCredentials } from "../slices/Users/userSlice";
import { toast } from "react-toastify";
import { removeFlightData } from "../slices/Flights/flightSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      const res = await logout().unwrap();
      dispatch(removeCredentials());
      dispatch(removeFlightData());
      navigate("/");
      toast.success(res.message);
    } catch (error) {}
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo]);
  return (
    <header className="p-2">
      <Navbar
        className="shadow p-2 mb-3 bg-body-tertiary"
        bg="light"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          {isLoading && <Spinner animation="grow" />}
          <LinkContainer to="/">
            <Navbar.Brand className="fs-4"> FlyPulse </Navbar.Brand>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown
              title={userInfo?.data?.name}
              id="username"
              className="me-2 d-inline"
              style={{ width: "10rem" }}
            >
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto fs-5">
                  <LinkContainer to="/signin">
                    <Nav.Link>
                      Sign In <FaSignInAlt />
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      Sign Up <FaSignOutAlt />
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
