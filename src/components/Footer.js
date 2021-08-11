import React from 'react'
import '../App.css'

function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white mt-5" style={{ borderTop: "3px solid #DC3545" }}>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6 text-center">
                            <div>
                                <span>Address :</span>
                                <span className="mx-3">Maripur, Muzaffarpur, Bihar 843109</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <small> Designed by <strong>Aghaz Junaid</strong> &copy; 2021. </small>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
