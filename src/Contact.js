// import React from 'react'
// import Footer from './Footer';
// import { useState } from "react";



// // const [userdata, setUserdata] = useState({
// //     Fname: '',
// //     Email: '',
// //     Phone: '',
// //     Address: '',

// // });

// const [userdata, setUserdata] = useState({
//     Fname: '',
//     Email: '',
//     Phone: '',
//     Address: '',
// })

// let name, value;
// const PostUserData = (e) => {
//     name = e.target.name
//     value = e.target.value

//     setUserdata({ ...userdata, [name]: value })
// }


// // connect with firebase
// const Submit = async (e) => {
//     e.preventDefault();
//     const { Fname, Email, Phone, Address } = userdata

//     if (Fname && Email && Phone && Address) {


//         const res = await fetch('https://property-fa5f2-default-rtdb.firebaseio.com/VisitorDataRecords.json',
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     Fname, Email, Phone, Address
//                 })
//             })

//         if (res) {
//             setUserdata({
//                 Fname: '',
//                 Email: '',
//                 Phone: '',
//                 Address: '',

//             })
//             alert('Data Submitted Successfully')
//         } else {
//             alert('Please Fill The Data ')
//         }
//     }
//     else {
//         alert('Please Fill The Data ')
//     }
// }
// export default function Contact() {
//     return (
//         <div className='hk'>
//             <div className="container mb-5">
//                 <div className="row">
//                     <div className='col-lg-6 col-md-6 col-sm-12'>
//                         <div>
//                             <div className="form-main mt-5">
//                                 <div className="main-wrapper">
//                                     <h4 className="form-head">CONTACT US</h4>
//                                     <form className="form-wrapper">
//                                         <div className="form-card">
//                                             <input
//                                                 className="form-input"
//                                                 type="text"
//                                                 name="Fname"

//                                                 required="required"
//                                             />
//                                             <label className="form-label" htmlFor="full_name">Full Name</label>
//                                         </div>

//                                         <div className="form-card">
//                                             <input
//                                                 className="form-input"
//                                                 type="email"
//                                                 name="Email"

//                                                 required="required"
//                                             />
//                                             <label className="form-label" htmlFor="email">Email</label>
//                                         </div>

//                                         <div className="form-card">
//                                             <input
//                                                 className="form-input"
//                                                 type="number"
//                                                 name="Phone"
//                                                 required="required"
//                                             />
//                                             <label className="form-label" htmlFor="phone_number">Phone number</label>
//                                         </div>

//                                         <div className="form-card">
//                                             <textarea
//                                                 className="form-textarea"
//                                                 maxLength="420"
//                                                 rows="3"

//                                                 name="Address"
//                                                 required="required"
//                                             ></textarea>
//                                             <label className="form-textarea-label" htmlFor="address" >Address</label>
//                                         </div>
//                                         <div className="btn-wrap">
//                                             <button type="submit" onClick={Submit}>Submit</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-lg-6 col-md-6 col-sm-12 mt-5 '>
//                         <div className='mtt'>
//                             <div className="contact-info ">
//                                 <h3 className="title">Let's get in touch</h3>

//                                 <div className="info">
//                                     <div className="information">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
//                                             <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" style={{ color: 'white' }} />
//                                             <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" style={{ color: 'white' }} />
//                                         </svg>

//                                         <p style={{ marginTop: '10px', marginLeft: '20px', fontWeight: '600', color: 'white' }}>500 Terry Francine Street San Francisco, CA 94158</p>
//                                     </div>
//                                     <div className="information">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
//                                             <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" style={{ color: 'white' }} />
//                                             <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" style={{ color: 'white' }} />
//                                         </svg>
//                                         <p style={{ marginTop: '10px', marginLeft: '20px', fontWeight: '600', color: 'white' }}>info@mysite.com</p>
//                                     </div>
//                                     <div className="information">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
//                                             <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" style={{ color: 'white' }} />
//                                         </svg>
//                                         <p style={{ marginTop: '10px', marginLeft: '20px', fontWeight: '600', color: 'white' }}>123-456-7890</p>
//                                     </div>

//                                     <p className="mt-4 mb-0"><b>Go To Pages:</b></p>
//                                     <a href="/Home" style={{ color: 'white', textDecoration: 'none' }} className="mt-4">Home</a><br />
//                                     <a href="/Properties" style={{ color: 'white', textDecoration: 'none' }} className="mt-4">Properties</a><br />
//                                     <a href="/Team" style={{ color: 'white', textDecoration: 'none' }} className="mt-4">Team</a><br />
//                                 </div>
//                                 <div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram mt-3 mb-3" viewBox="0 0 16 16">
//                                         <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//                                     </svg>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook mt-3 mb-3 m-3 " viewBox="0 0 16 16">
//                                         <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                                     </svg>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord mt-3 mb-3 m-3" viewBox="0 0 16 16">
//                                         <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
//                                     </svg>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin mt-3 mb-3 m-3" viewBox="0 0 16 16">
//                                         <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                                     </svg>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter mt-3 mb-3 m-3" viewBox="0 0 16 16">
//                                         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <Footer />
//         </div>
//     )
// }

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {


    const [userdata, setUserdata] = useState({
        Fname: '',
        Email: '',
        Message: '',
    });

    let name, value;
    const PostUserData = (e) => {
        name = e.target.name
        value = e.target.value

        setUserdata({ ...userdata, [name]: value })
    }


    // connect with firebase
    const Submit = async (e) => {
        e.preventDefault();
        const { Fname, Email, Message } = userdata

        if (Fname && Email && Message) {


            const res = await fetch('https://property-fa5f2-default-rtdb.firebaseio.com/VisitorDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Fname, Email, Message
                    })
                })

            if (res) {
                setUserdata({
                    Fname: '',
                    Email: '',
                    Message: '',
                })
                alert('Data Submitted Successfully')
            } else {
                alert('Please Fill The Data ')
            }
        }
        else {
            alert('Please Fill The Data ')
        }
    }
    return (
        <div id='Home' className='overflow-hidden'>


            <Container className='container'>

                <Row>
                    <Col xs={12} md={5} className='d-flex justify-content-center align-items-center'>
                        <div >

                            <h2 className='mt-4 mb-5' style={{ fontWeight: '900' }}>
                                Get in <span className='green'>Touch</span>
                            </h2>


                            <div className='mt-4 d-flex text-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" style={{ color: '#66B95C' }} />
                                </svg>
                                <a style={{ marginLeft: '20px' }} target="_blank" className='intro d-flex text-center flex-row justify-content-start' href="https://goo.gl/maps/EKTnaF1HJN6n4vSo8">Surat, Gujarat, India</a>
                            </div>

                            <div className='mt-4 d-flex text-center' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" style={{ color: '#66B95C' }} />
                                </svg>
                                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href="tel:7874638438">+91 7874638438</a>
                            </div>

                            <div className='d-flex text-center mt-4 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1 bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" style={{ color: '#66B95C' }} />
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" style={{ color: '#66B95C' }} />
                                </svg>
                                <a style={{ marginLeft: '20px' }} target="_blank" className='intro d-flex text-center flex-row justify-content-start' href="mailto:hemangk50@gmail.com">hemangk50@gmail.com</a>
                            </div>

                            <div className='d-flex text-center mt-4 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" style={{ color: '#66B95C' }} />
                                </svg>
                                <a style={{ marginLeft: '20px' }} target="_blank" className='intro d-flex text-center flex-row justify-content-start' href="https://www.linkedin.com/in/hemang-katariya-7483a824a">Hemang Katariya</a>
                            </div>
                            <div className="d-flex text-center mt-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" style={{ color: '#66B95C' }} />
                                </svg>
                                <a style={{ marginLeft: '20px' }} className='intro d-flex text-center flex-row justify-content-start' href='https://wa.me/7874638438' target="_blank">7874638438</a>

                            </div>

                            <div class="mapouter mt-5 mb-5"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=200&amp;hl=en&amp;q=Surat &amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://connectionsgame.org/">Connections Game</a></div></div>

                        </div>
                    </Col>
                    <Col xs={12} md={7} >
                        <div className='mt-5 d-flex justify-content-center text-center' >
                            <form method='POST'>

                                <h2 className='mb-5' style={{ fontWeight: '900' }}>
                                    Contact <span className='green'>Me</span>
                                </h2>
                                <div>
                                    <div className='mt-5 d-flex text-center'>
                                        <input type='text' placeholder='Name' Fname='name' required id='text' value={userdata.Fname} onChange={PostUserData}></input>

                                    </div>
                                    <div className='mt-5 d-flex text-center'>

                                        <input type='email' placeholder='Email' name='Email' required id='email' value={userdata.Email} onChange={PostUserData}></input>
                                    </div>
                                    <div className='mt-5 d-flex text-center'>
                                        <input type='text' placeholder='Message' name='Message' required id='message' value={userdata.Message} onChange={PostUserData}></input>

                                    </div>
                                    <div className='mt-5 mb-3 d-flex justify-content-center text-center'>
                                        <button className='butt' onClick={Submit}>SUBMIT</button>
                                    </div>

                                </div>
                            </form>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}




