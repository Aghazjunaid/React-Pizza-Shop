import React, { useState, useEffect } from "react";
import '../App.css'
import {Row, Button, Container} from 'react-bootstrap' 
import Navbars from './Navbar'
import Footer from "./Footer";

function Pizzas() {
    const [data, setData] = useState([]);
    useEffect( () => {
      getData()
    }, []);
  
    async function getData(){
      let result = await fetch("http://localhost:8000/product");
      result = await result.json();
      setData(result.data);
      console.log(result.data)
    }

    return (
        <>
            <Navbars/>
            <div className="container text-center mt-5">
                <h2 className="text-dark text-center">Pizza Menu</h2>
            </div>
            <Container>
                <Row>
                {
                   data.map(product => (
                    <div className="col-md-4 mt-2 text-center">
                        <img src={product.image} alt="pizza" className="img-fluid"/>
                        <h2>{product.name}</h2>
                        <div style={{fontSize:"17px"}}>{product.description}</div>
                        <div className="price mt-2">₹ { product.price }</div>
                        <div className="prodBtn mt-2">
                            <Button variant="warning">Add To Cart</Button>
                            <Button variant="primary">Order Now</Button>{' '}
                        </div>
                    </div>
                   ))
                }
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Pizzas
