import React from "react";
import classes from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavigationBar = () => {
  const balance = useSelector((state) => state.balance);
  console.log(balance);
  return (
    <Navbar
      className={classes.colornav}
      collapseOnSelect
      sticky="top"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className={classes.brand} as={Link} to="/">
          LearnOinvest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/finDic">
              FinDictionary
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Community
            </Nav.Link>
          </Nav>
          <Nav>
            <div className={classes.balance}>
              <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon>{" "}
              {balance[0].balance}
            </div>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={classes.walletbtn}
              style={{ color: "white" }}
            >
              PortFolio
            </Nav.Link>

            <Nav.Link
              href="#deets"
              className={classes.login}
              style={{ color: "white" }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
