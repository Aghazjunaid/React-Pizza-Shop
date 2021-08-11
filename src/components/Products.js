import React from 'react'
import '../App.css'
import {Row, Col, Container} from 'react-bootstrap' 

function Products() {
    return (
        <div>
            <div className="container text-center">
                <h2 className="text-dark text-center">Pizza Menu</h2>
                <div className="welcome-menu">WELCOME TO</div>
                <div className="welcome-menu">PIZZA SHOP</div>
            </div>
            <Container>
                <Row>
                    <Col md={4}>1 of 3</Col>
                    <Col md={4}>1 of 3</Col>
                    <Col md={4}>1 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products
