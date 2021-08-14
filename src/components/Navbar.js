import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap' 
import '../App.css'

function Navbars() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);


    async function getData() {
        let result = await fetch("http://localhost:8000/cart");
        result = await result.json();
        setData(result.data);
        console.log(result.data)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'white'}}>
                <Container>
                    <Link to="/" className="brand">
                        <Navbar.Brand href="#home" style={{fontSize:"25px", color:'orange'}}>PizzaShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'orange'}} />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{color:'orange'}}>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" className="unlink mx-2 navStyle mt-2" >Home</Link>
                            <Link to="/pizzas" className="unlink mx-2 navStyle mt-2">Pizzas</Link>
                            <Link to="/cart" className="unlink mx-2">
                                <div className="cart">
                                    <span className="mx-2 text-white brand">{data.length}</span>
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
