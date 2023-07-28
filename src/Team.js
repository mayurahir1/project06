import React from 'react'
import Navv from './Navv'
import img19 from './image/img19.webp'
import img20 from './image/img20.webp'
import img21 from './image/img21.webp'
import img22 from './image/img22.webp'
import img23 from './image/img23.webp'
import img24 from './image/img24.webp'
import Contact from './Contact'
export default function Team() {
    return (
        <div>
            <Navv />


            <div className="container-fluid md">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center text-center text-light " >
                        <div className='col-lg-12 col-md-12 col-sm-12 ' style={{ marginTop: '100px' }}>
                            <h4>OUR TEAM</h4>
                            <h1>Agents</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid  d-flex justify-content-center align-items-center text-center'>


                <div className="container mt-5">
                    <div className="row">

                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5 mb-5 '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>
                                    Gregory Jems</h4>
                                <p>Realtor # 123.456.78

                                </p>

                            </div>
                            <div>  <img src={img19} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5 '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>

                                    Britney Bails
                                </h4>
                                <p>Realtor # 123.456.78

                                </p>

                            </div>
                            <div>  <img src={img20} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5 '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>

                                    Gerry Grossman</h4>
                                <p>Realtor # 123.456.78

                                </p>

                            </div>
                            <div>  <img src={img21} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5  '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>
                                    Mike Helman</h4>
                                <p>Realtor # 123.456.78

                                </p>

                            </div>
                            <div>  <img src={img22} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5 '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>

                                    Brenda Rogers</h4>
                                <p>Realtor # 123.456.78

                                </p>

                            </div>
                            <div>  <img src={img23} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 mt-5 '>
                            <div style={{ marginRight: '90px' }}>
                                <h4>  Don White</h4>
                                <p>Realtor # 123.456.78  </p>
                            </div>
                            <div>  <img src={img24} alt="" /> </div>
                            <div style={{ textAlign: 'justify', marginLeft: '80px' }} className='mt-3'>
                                <h4>Email
                                </h4>
                                <p>info@mysite.com</p>
                                <h5>Phone

                                </h5>
                                <h6>123-456-7890
                                </h6>
                            </div>
                        </div>

                    </div>

                    <br /><br /><br /><hr style={{ border: '1px solid black' }} />
                </div>
            </div>
            <Contact />
        </div>
    )
}
