import React from 'react'
import '../App.css'

function Body() {
    return (
        <>
                <div className="container centered">
                    <h2 className=" text-white font-weight-bold ">
                        Pizza Delivery
                    </h2>
                    <div className="text-uppercase text-white font-weight-bold weight">
                        Pizza
                    </div>
                    <div className="text-uppercase text-white weight font-weight-bold piziniMargin">
                        Shop
                    </div>
                    <p className=" text-white  about-color">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        A expedita rem amet sit natus quibusdam reprehenderit incidunt harum animi fuga.
                    </p>
                    <button type="button" className="btn btn-danger delBtn">ORDER NOW</button>
                </div>
        </>
    )
}

export default Body
