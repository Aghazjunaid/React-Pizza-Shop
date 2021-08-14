import React, { useEffect, useState } from "react";
import {Row,Col, Button, Container} from 'react-bootstrap' 
import Navbars from './Navbar'
import '../App.css'
import Footer from './Footer'
import "bootstrap-icons/font/bootstrap-icons.css";

function ProductDetails(props) {
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState()

    console.log(props.match.params._id);

    useEffect(async () => {
        let result = await fetch(
          "http://localhost:8000/product/" + props.match.params._id
        );
        result = await result.json();
        setData(result.data[0]);
        console.log(result.data[0])
    }, []);

    async function IncQuanBy1(e,id) {
        e.preventDefault();
        setQuantity(1)
        console.log(id)
        let result = await fetch("http://localhost:8000/cart/" + id, {
            method: 'POST',
            body: JSON.stringify(quantity)
        });
        console.log(result)
    }

    return (
        <>
            <Navbars/>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <img src={data.image} alt="pizza" className="img-fluid mx-5"/>
                            <div className="prodBtn mt-2">
                                <Button variant="warning"  onClick={(e) => {
                                    IncQuanBy1(e,props.match.params._id);
                                }}>Add To Cart</Button>
                                <Button variant="primary">Order Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h2 style={{color:"black"}} className="mt-5">{data.name}</h2>
                            <div style={{fontSize:"15px", color:"black"}}>{data.description}</div>
                            <div className="price mt-2" style={{color:"#850f0f"}}>₹ { data.price }</div>
                            <div className="mt-5 offer">
                                <div><i class="bi bi-caret-right-fill"></i> Bank Offer 5% Unlimited Cashback on Pizzashop Axis Bank Credit Card</div>
                                <div><i class="bi bi-caret-right-fill"></i>  Bank Offer 10% Off on Bank of Baroda debit card first time transaction, Terms and Condition apply</div>
                                <div><i class="bi bi-caret-right-fill"></i>  Purchase this Pizza and Chances to Get Extra ₹500 Off on Select ACs</div>
                            </div>
                            <div className="delivery"><i class="bi bi-truck text-dark"></i>   Delivered Within 30 min after Ordering the Pizza</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default ProductDetails
