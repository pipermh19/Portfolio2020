// Imported Components
import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css"
import Col from "react-bootstrap/Col";
import { useSpring, animated } from 'react-spring';

//Imported Images
import platformReview from "./assets/platformReview.png"
import dashboardMobileDesktop from './assets/laptopPhoneDash.png'
import login from './assets/GoCorsicanaLogIn.png'
import fourLoginViews from './assets/loginLanding4.png'
import loginDesktop from './assets/Login3.2.png'
import loginMobile from './assets/loginMobile2.png'
import navChangeDash from './assets/navChangeDash.png'
import navChangeDash2 from './assets/navChangeDash2.png'
import initialImg from './assets/Login4.2Laptop.png'
import {Link} from "react-router-dom";

//Component that holds all of the GoCoriscana application content
function GoCorsicanaContent(){
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    //Initializes scroll animation
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <Container fluid={true} className="justify-content-center">
            {/* Project Content */}
            <animated.div style={props}>
                <Row className="initial-image-row">
                    <Col className='justify-content-center initial-image-div' xs={10} md={8} lg={6}>
                        <img className="initial-image" src={initialImg} alt="image of the login page on a laptop"></img>
                    </Col>
                </Row>
            </animated.div>
            <Row className='justify-content-center title-row'>
                <Col data-aos="fade" className='justify-content-center' xs={11} md={10} lg={8}>
                    <h1>GoCorsicana</h1>
                    <h3 className='subtitle'>GoCorsicana is a proprietary role based platform for internal and business to business use.</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" lg={8} md={10} xs={11} className='content-container first-container'>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Reasoning</h5>
                                <p>Sales reps and managers are to expected increase market share while maintaining current
                                customer relations.
                                However, Corsicana Mattresses (CM) processes have become outdated and inefficient causing
                                the use of unnecessary department resources.
                                By redesigning Corsicana Mattress’s business approach, GoCorsicana will be able to help
                                customers more effectively,
                                increase market share, build a stronger brand, increase credibility and reputation, and
                                become more cost efficient.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Approach</h5>
                                <p>To create the portal my lead architect and business analyst first outlined the
                                infrastructure between the company’s enterprise software,
                                tracking software and the future web application. Once the architecture was finalized, I
                                researched other SAAS applications and their service interfaces.
                                After analyzing other applications, I was able to create low fidelity mock-ups of the
                                portal’s interface using photoshop and XD. My team members and I then
                                discussed the pros and cons of the mock-ups and decided on the most efficient interface
                                design. Once this decision was made,
                                I worked with my senior front-end developer to build the portal’s APIs and interface.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Objective</h5>
                                <p> To designed and helped develop a role based online portal that aggregates reports and
                                    business applications in to one easily accessible location. </p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Role</h5>
                                <ul>
                                    <li>User Interface Designer</li>
                                    <li>Content Designer</li>
                                    <li>Front End Developer</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center'>
                <Col xs={12} md={10} lg={8} data-aos="fade">
                    <p className="section-title">Research</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={8} md={10} xs={11} data-aos="fade" className='justify-content-center content-container'>
                    <Row>
                        <Col className='justify-content-center' lg={4} md={4} xs={12}>
                            <div>
                               <p className="initial-info" > Before creating detailed mock-ups, I reviewed other SAAS applications.
                                My goal was to understand what type of interface design was most commonly used.
                                   By comparing other websites I was able to get an insight into what other company's viewed as the best user experience.</p>
                                <ul className="initial-info">
                                    <li>Compatible with multiple browsers</li>
                                    <li>Responsive and mobile friendly</li>
                                    <li>Light template themes</li>
                                    <li>Collapsible or thin navigation</li>
                                    <li>Initial high level dashboard</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='justify-content-center image-div' lg={8} md={8} xs={12}>
                            <img className="image" src={platformReview} alt="other company's dashboards"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' lg={4} md={4} xs={12}>
                            <div>
                                <h5>Implementation</h5>
                                <p className="initial-info" > Based on my research, I was able to outline important features necessary to create an efficient portal interface.</p>
                                <h5>Accessibility</h5>
                                <ul className="initial-info">
                                    <li>Easy authentication and password manager</li>
                                    <li>Intuitive navigation</li>
                                    <li>Minimalistic</li>
                                    <li>Device and browser compatibility</li>
                                </ul>
                                <h5>Content</h5>
                                <ul className="initial-info">
                                    <li>Initial dashboard</li>
                                    <li>Analytic reports</li>
                                    <li>Business applications</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='justify-content-center image-div' lg={8} md={8} xs={12}>
                            <img className="image" src={dashboardMobileDesktop} alt="dashboard on laptop and mobile"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center'>
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">DESIGNS</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={login} alt="initial login pages"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={fourLoginViews} alt="login page iteration"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' md={8} xs={12}>
                            <img className="image" src={loginDesktop} alt="final login page dashboard"></img>
                        </Col>
                        <Col className='justify-content-center' md={4} xs={12}>
                            <img className="image" src={loginMobile} alt="final login mobile"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' md={6} xs={12}>
                            <img className="image" src={navChangeDash} alt="side nav expanded and collapsed"></img>
                        </Col>
                        <Col className='justify-content-center' md={6} xs={12}>
                            <img className="image" src={navChangeDash2} alt="sales user dashboard"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default GoCorsicanaContent