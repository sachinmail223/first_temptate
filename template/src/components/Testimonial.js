import React from 'react'
import "./Testimonial.css"

const Testimonial = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-around">

                <p className=" justify-content-around display-4 font-weight-normal ml-5 mb-5">
                    Client Testimonial
                    </p>

                <div className="col-lg-10 justify-content-around mb-5 p-5">
                    <div id="carouselExampleControls" className="carousel slide testimonial-div" data-ride="carousel">
                        <div className="carousel-inner testimonial-div ">
                            <div className="carousel-item active align-self">
                                <div className="testimonial row">
                                    <div className="col-12 m-auto">
                                    <p className="col-12">"Supercharge your WordPress hosting with detailed website analytics, marketing
tools. Our experts are just part of the reason Bluehost is the ideal home for your
WordPress website. We're here to help you succeed!</p>

<div className="row d-flex justify-content-center">
    <div className="col-lg-2 col-6"><img className="ml-5" src="/images/testimonial.webp" alt=""/></div>
    
    <div className="col-lg-3 col-6">
            <p className="lead font-weight-bold">Jacson Miller</p>
            <p>Designer @BSK's</p>
        </div></div>
                                    </div>
                                    </div>
                            
                            </div>
                            <div className="carousel-item testimonial">
                            <div className="testimonial row">
                                    <div className="col-12 m-auto">
                                    <p className="col-12">"Supercharge your WordPress hosting with detailed website analytics, marketing
tools. Our experts are just part of the reason Bluehost is the ideal home for your
WordPress website. We're here to help you succeed!</p>

<div className="row d-flex justify-content-center">
    <div className="col-lg-2 col-6"><img className="ml-5" src="/images/testimonial.webp" alt=""/></div>
    
    <div className="col-lg-3 col-6">
            <p className="lead font-weight-bold">Jacson Miller</p>
            <p>Designer @BSK's</p>
        </div></div>
                                    </div>
                                    </div>


                            </div>
                            <div className="carousel-item testimonial">
                            <div className="testimonial row">
                                    <div className="col-12 m-auto">
                                    <p className="col-12">"Supercharge your WordPress hosting with detailed website analytics, marketing
tools. Our experts are just part of the reason Bluehost is the ideal home for your
WordPress website. We're here to help you succeed!</p>

<div className="row d-flex justify-content-center">
    <div className="col-lg-2 col-6"><img className="ml-5" src="/images/testimonial.webp" alt=""/></div>
    
    <div className="col-lg-3 col-6">
            <p className="lead font-weight-bold">Jacson Miller</p>
            <p>Designer @BSK's</p>
        </div></div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
