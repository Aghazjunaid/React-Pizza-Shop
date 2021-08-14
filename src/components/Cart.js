import React, { useState, useEffect } from "react";
import '../App.css'
import { Row, Button, Container } from 'react-bootstrap'
import Navbars from './Navbar'
import Footer from './Footer'

function Cart() {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [quantity, setQuantity] = useState()
    const [decQuantity, setDecQuantity] = useState()

    useEffect(() => {
        getData()
        getTotalPrice()
        deleteData()
    }, []);

    async function getData() {
        let result = await fetch("http://localhost:8000/cart");
        result = await result.json();
        setData(result.data);
        console.log(result.data)
    }

    async function getTotalPrice() {
        let result = await fetch("http://localhost:8000/find");
        result = await result.json();
        setTotalPrice(result.totalPrice);
        console.log(totalPrice)
    }

    async function deleteData(id) {
        console.log(id)
        await fetch("http://localhost:8000/cart/" + id, {
            method: 'DELETE',
        });
        getData()
        getTotalPrice()

    }

    async function IncQuanBy1(id) {
        setQuantity(1)
        console.log(id)
        let result = await fetch("http://localhost:8000/cart/" + id, {
            method: 'POST',
            body: JSON.stringify(quantity)
        });
        console.log(result)
        getData()
        getTotalPrice()

    }

    async function DecQuanBy1(id) {
        setDecQuantity(-1)
        console.log(id)
        let result = await fetch("http://localhost:8000/decreaseCartQuantity/" + id, {
            method: 'POST',
            body: JSON.stringify(decQuantity)
        });
        console.log(result)
        getData()
        getTotalPrice()

    }

    return (
        <>
            <Navbars />
            <Container>
                <div className="text-center mt-3">
                    <h3 style={{ color: "#850f0f" }}>Cart items</h3>
                </div>
                {
                    data.map(cart => (
                        <div className="cartListing">
                            <img src={cart?.product?.image} alt="pizza" className="img-fluid cart-img" />
                            <div className="abc">
                                <Button variant="warning" style={{ fontSize: "20px" }} onClick={() => {
                                    DecQuanBy1(cart.product._id);
                                }}>-</Button>
                                <span className="mx-2 abc">{cart?.quantity}</span>
                                <Button variant="warning" style={{ fontSize: "20px" }} onClick={() => {
                                    IncQuanBy1(cart.product._id);
                                }}>+</Button>
                            </div>
                            <div className="abc" style={{ color: "#850f0f", fontSize: "20px" }}>₹ {cart?.quantity * cart?.product?.price}</div>
                            <div className="abc">
                                <Button variant="danger" onClick={() => {
                                    deleteData(cart._id);
                                }} style={{ borderRadius: "15px", fontWeight: "600" }}>Delete</Button>
                            </div>
                        </div>
                    ))
                }
                <div className="totalprice">
                    <div className="tpchild">Total Price : ₹ {totalPrice}</div>
                </div>
            </Container>
        </>
    )
}

export default Cart
