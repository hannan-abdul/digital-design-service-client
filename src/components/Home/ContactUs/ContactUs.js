import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './Contact.css';

const ContactUs = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const loading = toast.loading('Please wait...!');
        emailjs.send('service_agp6dw7', 'template_uno57cd', data, 'user_fHGK628WRJqiLDVimt8op')
            .then((res) => {
                toast.dismiss(loading);
                if (res.text === "OK") {
                    reset();
                    return swal("Thank you!", "Your message was sent successfully.", "success");
                }
                swal("Sorry!", "Something went wrong. Please try again later", "error");
            }, (err) => {
                toast.dismiss(loading);
                swal("Sorry!", "Something went wrong. Please try again later", "error")
            });
    };

    return (
        <section id="contact" className="contact-section">
            <Fade bottom duration={2500} distance="40px">
                <Container>
                    <div className="text-center">
                        <h1>Contact Us</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="input-container">
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <input placeholder="name" type="text" {...register("name", { required: true })} required />
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input">
                                    <input placeholder="Email" type="text" {...register("email", { required: true })} required />
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="styled-input" style={{ float: "right" }}>
                                    <input placeholder="Phone" type="text" {...register("phone", { required: true })} required />
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="styled-input wide">
                                    <textarea placeholder="Message" {...register("message", { required: true })} required />
                                </div>
                            </Col>
                            <Col xs={12}>
                                <button className="btn-lrg submit-btn btn-main">Send Message</button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </Fade>
        </section>
    );
};

export default ContactUs;