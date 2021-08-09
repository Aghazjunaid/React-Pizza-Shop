import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap' 
import '../App.css'

function Navbars() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Link className="brand">
                        <Navbar.Brand href="#home" style={{fontSize:"25px", color:'orange'}}>PizzaShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'orange'}} />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{color:'orange'}}>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" className="unlink mx-2 navStyle mt-2" >Home</Link>
                            <Link to="/pizza" className="unlink mx-2 navStyle mt-2">Pizzas</Link>
                            <Link to="/cart" className="unlink mx-2">
                                <div className="cart">
                                    <span className="mx-2">0</span>
                                    <img src="/images/cart.png" alt="cart-icon" style={{color:'black'}}/>
                                </div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
