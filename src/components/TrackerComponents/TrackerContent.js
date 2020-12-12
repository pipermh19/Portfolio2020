//Imported components
import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css"
import Col from "react-bootstrap/Col";
import { useSpring, animated } from 'react-spring';

//Imported Images
import img2 from "./assets/results2a.png"
import img3 from './assets/orderMock1.png'
import img4 from './assets/details3.png'
import img5 from './assets/mobileDisplayTrackerDetails.png'
import img6 from './assets/detailsLong.png'
import img7 from './assets/fedExMock.png'
import img8 from './assets/FedexDelivered.png'
import img9 from './assets/results.gif'
import img1 from './assets/laptop_Tracker.png'

//Portfolio Piece Content: Order Tracker
function TrackerContent(){
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    // Initializing Animation on Scroll Library
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <Container fluid={true} className="justify-content-center">
            {/* Fade animation from React Spring */}
            <animated.div style={props}>
                {/* Initial project image */}
                <Row className="initial-image-row tracker-image">
                    <Col className='justify-content-center initial-image-div' xs={10} md={8} lg={6}>
                        <img className="initial-image" src={img1} alt="image of tracker application on laptop"></img>
                    </Col>
                </Row>
            </animated.div>
            {/* Project content */}
            <Row className='justify-content-center title-row'>
                <Col data-aos="fade" className='justify-content-center' xs={11} md={10} lg={8}>
                    <h1>Order Tracker</h1>
                    <h3 className='subtitle'>Order Tracker is an application in the GoCorsicana Portal that allows the sales team and customers to easily track orders.</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" lg={8} md={10} xs={11} className='content-container first-container'>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Reasoning</h5>
                                <p>Corsicana's sales team and customers did not have a fast and efficient way to track orders.
                                    They relied on customer service for updates on current orders.
                                    To improve efficiency and lower customer service cost, Corsicana Mattress created
                                    an online application that allowed users to track their own orders.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Approach</h5>
                                <p>To create the application my team’s business analyst and lead architect outlined
                                    the approach needed to pull order details from the EP system and tracking information from the TMS system.
                                    After my business analyst gathered application requirements from the director of sales the processes and requirements were established. After I designed a few low fidelity mock-ups using photoshop and XD of the potential application. My team and I decided on the most efficient and mobile responsive interface.
                                    With the designs in hand, I developed the front-end APIs and interface for the tracking application.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Objective</h5>
                                <p> To create a mobile friendly role-based application that provides the sales
                                    team and customers easy access to their order’s details and tracking information. </p>
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
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">Designs</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={img2} alt="tracker landing page"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={img3} alt="initial tracker design"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' md={8} xs={12}>
                            <img className="image" src={img4} alt="initial tracker details page"></img>
                            <img className="image" src={img7} alt="image of order tracker result details fedex in progress"></img>
                            <img className="image" src={img8} alt="image of order tracker result details fedex delivered"></img>
                        </Col>
                        <Col className='justify-content-center' md={4} xs={12}>
                            <img className="image" src={img6} alt="tracker on mobile platform"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' lg={4} md={6} xs={12}>
                            <div>
                                <h5>Text Heavy</h5>
                                <p className="initial-info" > The order tracker is a data driven application,
                                    which means it is text heavy. an interface for a text heavy application comes with its own challenges.
                                    One of the biggest challenges faced was how to create an aesthetically pleasing interface that was also effective
                                    and efficient when used on both desktop and mobile devices.</p>
                            </div>
                        </Col>
                        <Col className='justify-content-right image-div' lg={8} md={5} xs={12}>
                            <Row>
                                <Col md={6} xs={12}>
                                    <img className="image" src={img5} alt="tracker on mobile"></img>
                                </Col>
                                <Col md={6} xs={12}>
                                    <img className="image" src={img9} alt="gif of tracker on mobile"></img>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default TrackerContent