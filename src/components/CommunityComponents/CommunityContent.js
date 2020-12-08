import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css"
import Col from "react-bootstrap/Col";
import { useSpring, animated } from 'react-spring';


import img1 from './assets/InitialPhoto.png'


function CommunityContent(){
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <Container fluid={true} className="justify-content-center">
            <animated.div style={props}>
                <Row className="initial-image-row community-image">
                    <Col className='justify-content-center initial-image-div' xs={10} md={8} lg={6}>
                        <img className="initial-image initial-mobile" src={img1} alt="image of the login page on a laptop"></img>
                    </Col>
                </Row>
            </animated.div>
            <Row className='justify-content-center title-row'>
                <Col data-aos="fade" className='justify-content-center' xs={11} md={10} lg={8}>
                    <h1>Community On the Go</h1>
                    <h3 className='subtitle'>The Community on the Go website creates a community-based platform for
                        Kelly Strayhorn Theater virtual events that facilitates interactions between participants and hosts
                        to increase engagement and reduce uncertainty about class expectations.</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" lg={8} md={10} xs={11} className='content-container first-container'>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Reasoning</h5>
                                <p>.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Approach</h5>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Objective</h5>
                                <p></p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Role</h5>
                                <ul>
                                    <li>User Experience Researcher</li>
                                    <li>User Interface Designer</li>
                                    <li>Content Designer</li>
                                </ul>
                            </div>
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
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                </Col>
            </Row>
        </Container>
    );
}
export default CommunityContent