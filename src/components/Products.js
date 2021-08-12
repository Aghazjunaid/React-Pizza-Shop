import React, { useState, useEffect } from "react";
import '../App.css'
import {Row, Button, Container} from 'react-bootstrap' 
import { Link } from 'react-router-dom';

function Products() {
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
        <div>
            <div className="container text-center">
                <h2 className="text-dark text-center">Pizza Menu</h2>
                <div className="welcome-menu">WELCOME TO</div>
                <div className="welcome-menu">PIZZA SHOP</div>
            </div>
            <Container>
                <Row>
                {
                   data.slice(0, 6).map(product => (
                    <Link to={`/pizza/${product._id}`} style={{ textDecoration: 'none' }} className="col-md-4 mt-2 text-center">
                        <div >
                            <img src={product.image} alt="pizza" className="img-fluid"/>
                            <h2 style={{color:"black"}}>{product.name}</h2>
                            <div style={{fontSize:"17px", color:"black"}}>{product.description}</div>
                            <div className="price mt-2" style={{color:"black"}}>₹ { product.price }</div>
                            <div className="prodBtn mt-2">
                                <Button variant="warning">Add To Cart</Button>
                                <Button variant="primary">Order Now</Button>
                            </div>
                        </div>
                    </Link>
                   ))
                }
                </Row>
            </Container>
        </div>
    )
}

export default Products
