import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="row  d-flex justify-content-center align-items-center ">
                <div className='col-lg-12 col-md-12 col-sm-12 '>
                    {/* <footer>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <div className="ft-main-item mt-5" >
                                        <p className='mt-4 mb-0 '><b>Go To Pages:</b></p><br />
                                        <a href="/Home" style={{ textDecoration: 'none' }} className='mt-4'>Home</a><br />
                                        <a href="/Properties" style={{ textDecoration: 'none' }} className='mt-4'>Properties</a><br />
                                        <a href="/Team" style={{ textDecoration: 'none' }} className='mt-4'>team</a><br />
                                        <a href="/Contact" style={{ textDecoration: 'none' }} className='mt-4'>Contact</a><br />

                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="ft-main-item mt-5">
                                        <p className='mt-4 mb-0 '><b>Links :</b></p><br />
                                        <a href="https://www.instagram.com/" style={{ textDecoration: 'none' }} className='mt-4'>instagram</a><br />
                                        <a href="https://www.whatsapp.com/" style={{ textDecoration: 'none' }} className='mt-4'>Facebook</a><br />
                                        <a href="https://www.facebook.com/" style={{ textDecoration: 'none' }} className='mt-4'>Whatsapp</a><br />
                                        <a href="https://www.twitter.com/" style={{ textDecoration: 'none' }} className='mt-4'>Whatsapp</a><br />

                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="ft-main-item mt-5">
                                        <p className='mt-4 mb-0 '><b>Links :</b></p><br />
                                        <a href=""><p>dhara trade center , motavarachha surat</p></a>
                                        <a href=""> <p> decode.11@gmail.com </p></a>
                                        <a href=""><p>123-456-7890</p></a>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                        <section className="ft-social">
                            <ul className="ft-social-list">
                                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-github"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </section>
                      
                    </footer> */}
                    <div class="mapouter mt-5 mm"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" height='380px' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=548&amp;height=273&amp;hl=en&amp;q=decode softtech&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/"></a></div></div>
                    <section className="ft-legal">
                        <ul className="ft-legal-list text-white text-center justify-content-center mt-5">
                            <h4>CREATED ❤ BY MAYUR KALSARIYA </h4>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
