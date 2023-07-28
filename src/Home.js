import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Navv from './Navv'
import img4 from './image/img4.webp'
import img5 from './image/img5.webp'
import img6 from './image/img6.webp'
import img7 from './image/img7.webp'
import img8 from './image/img8.webp'
import img9 from './image/img9.webp'
import Contact from './Contact';

export default function Home() {
    return (
        <div className='home w-auto m-0 p-0'>
            <Navv />
            <div className="container-fluid img1">
                <div className="row">
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div className='new' >
                            <h1 style={{ fontSize: '55px', marginTop: '230px', fontFamily: 'Roboto ,sans-serif' }} >New Properties</h1>
                            <p style={{ fontSize: '25px', }}>EXCLUSIVELY BY DWELL</p>
                            <a href="#0" class="button12">
                                <em> </em>
                                <span>
                                    Explore
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container mt-5 mb-5">
                    <h3 className='text-center mt-5'>WHAT ARE YOU LOOKING FOR?</h3>
                    <div className="row">
                        <div className='mt-5 col-lg-6 col-md-6 col-sm-12 im1 d-flex justify-content-center align-items-center text-center'><h1 style={{ fontWeight: '900', fontSize: '55px', color: 'aliceblue' }}>BUY</h1></div>
                        <div className='mt-5 col-lg-6 col-md-6 col-sm-12 im2 d-flex justify-content-center align-items-center text-center'><h1 style={{ fontWeight: '900', fontSize: '55px', color: 'aliceblue' }}>RENT</h1></div>
                    </div>
                </div>
            </div>
            <div className='container-fluid  d-flex justify-content-center align-items-center text-center'>


                <div className="container mt-5">
                    <div className="row">
                        <h4>NEW PROPERTIES</h4>
                        <h1 className='mb-5'>For Sale</h1>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img4} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3>17081 Perry Street</h3>
                                <p>San Francisco, CA, USA</p>
                                <h6>$850,000</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img5} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3>


                                    52591 Union Boulevard</h3>
                                <p>  52591 Union Boulevard</p>
                                <h6>$580,000</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img6} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3>


                                    33234 Washington Avenue</h3>
                                <p>  33234 Washington Avenue</p>
                                <h6>$770,000</h6>
                            </div>
                        </div>
                    </div>
                    <button class="btn mt-5"><span>View More</span></button>

                    <br /><br /><br /><hr style={{ border: '1px solid black' }} />
                </div>
            </div>

            <div className='container-fluid  d-flex justify-content-center align-items-center text-center'>


                <div className="container mt-5">
                    <div className="row" >
                        <h4>NEW PROPERTIES</h4>
                        <h1 className='mb-5'>For Rent</h1>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img7} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3> 11251 Terry Street</h3>
                                <p>San Francisco, CA, USA</p>
                                <h6>$1,500</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img8} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3>                                    22043 Columbus Avenue</h3>

                                <p>San Francisco, CA, USA</p>
                                <h6>$1200</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12  '>
                            <div>  <img className='img-fluid' src={img9} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '40px' }} className='mt-3'>
                                <h3>15878 Mulberry Street</h3>
                                <p>San Francisco, CA, USA</p>
                                <h6>$1800</h6>
                            </div>
                        </div>
                    </div>
                    <button class="btn mt-5"><span>View More</span></button>

                    <br /><br /><br /><hr style={{ border: '1px solid black' }} />
                </div>
            </div>

            <div className='container-fluid  d-flex justify-content-center align-items-center text-center'>

                <div className="container mt-5">
                    <h4>CLIENTS STORIES</h4>
                    <div className="row">
                        <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>

                            <Carousel className='mk '>
                                <Carousel.Item>

                                    <p className='p d-flex justify-content-center '>"I'm a paragraph. Click here to add your own text and edit  me. It’s easy. Just click “Edit Text” or double click me to add  your own content and make changes to the font."
                                    </p>
                                    <h3 className='h3 mt-3'>MAYUR AHIR</h3>
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>

                                    <p className='p1 p'>"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                                    </p>
                                    <h3 className='h3 mt-3'>MAYUR AHIR</h3>
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>

                                    <p className='p2 p'>"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
                                    </p>
                                    <h3 className='h3 mt-3'>MAYUR AHIR</h3>
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>


                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid  d-flex justify-content-center align-items-center text-center'>

                <div className="container mt-5">

                    <h4>   YOUR DREAM HOUSE IS ONE STEP AWAY!</h4>
                    <div className="row">
                        <div className='col-lg-4 col-sm-12 col-md-4 mt-5 mb-5'>
                            <div style={{ textAlign: 'justify', justifyContent: 'center', textAlign: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <h3 className='mt-3'> Call Us</h3>
                                <p>Free Calls </p>
                                <h6> 1-800-000-000</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-4 mt-5 mb-5'>
                            <div style={{ textAlign: 'justify', justifyContent: 'center', textAlign: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <h3 className='mt-3'> Find Us</h3>
                                <p>500 Terry Francine St. </p>
                                <h6> San Francisco, CA 94158</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-4 mt-5 mb-5'>
                            {<div>
                                <div style={{ textAlign: 'justify', justifyContent: 'center', textAlign: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>
                                    <h3 className='mt-3'> Email Us</h3>
                                    <p>Direct Email </p>
                                    <h6>info@mysite.com</h6>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Contact />
            </div>
        </div >



    )
}
