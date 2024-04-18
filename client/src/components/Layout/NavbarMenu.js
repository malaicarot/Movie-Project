import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGuilded } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../contexts/AuthContext";

const NavbarMenu = () => {
  const {
    authState: {
      user: { userName },
    },
    logout,
  } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
    window.location.reload();
  };

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow nav-menu">
      <Navbar.Brand className="font-weight-bolder text-white logo">
        <div className="logo">
          <FontAwesomeIcon icon={faGuilded} />
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar p-2">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            DashBoard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome {userName}
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text-white "
            onClick={logoutHandler}
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
