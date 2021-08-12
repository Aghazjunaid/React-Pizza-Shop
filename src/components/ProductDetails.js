import React, { useEffect, useState } from "react";
import {Row,Col, Button, Container} from 'react-bootstrap' 
import Navbars from './Navbar'
import '../App.css'

function ProductDetails(props) {
    const [data, setData] = useState([]);
    console.log(props.match.params._id);

    useEffect(async () => {
        let result = await fetch(
          "http://localhost:8000/product/" + props.match.params._id
        );
        result = await result.json();
        setData(result.data[0]);
        console.log(result.data[0])
      }, []);

    return (
        <>
            <Navbars/>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <img src={data.image} alt="pizza" className="img-fluid mx-5"/>
                            <div className="prodBtn mt-2">
                                <Button variant="warning">Add To Cart</Button>
                                <Button variant="primary">Order Now</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default ProductDetails
