import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Header() {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    displaycartitem();
  }, []);
  function displaycartitem() {
    fetch("http://localhost:3000/cart").then((resp1) =>
      resp1.json().then((resp2) => {
        console.log(resp2);
        setCart(resp2);
      })
    );
  }
  let login = localStorage.getItem("login");
  const navi = useNavigate();
  function handleSearch(s) {
    navi("/search", { state: { s: s } });
  }
  // login.map((i)=>{
  //     return(
  //     console.log(i.email))
  // })
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            className="fs-2 ms-5"
            style={{ fontFamily: "brush Script mt " }}
          >
            Feane
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/booking">Book Table</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="/signup">SignUp</Nav.Link>
              {login ? (<Nav.Link href="/logout">Signout</Nav.Link>) : 
              (
                <Nav.Link href="/signin">SignIn</Nav.Link>
              )}

              <Nav.Link href="#search">
                <input
                  type="search"
                  className="border-0 form-control bg-white"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </Nav.Link>
              <Nav.Link href="/cart">
                <FaShoppingCart />
                <sup>{Cart.length}</sup>
              </Nav.Link>
              <Nav.Link href="/person">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
