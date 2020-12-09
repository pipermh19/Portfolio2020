import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import img1 from "./assets/Headshot_Circle.png"

function AboutContent(){

    return(
        <Container fluid={true} className="justify-content-center">
            <Row className="justify-content-center">
                <Col className="justify-content-center" lg={8} md={10} xs={11}>
                    <Row className="justify-content-center" >
                        <Col lg={4} md={4} xs={12}>
                            <img className="profile-picture" src={img1} alt="Headshot of Piper Hayden"></img>
                        </Col>
                        <Col className="about-text-div" lg={8} md={8} xs={12}>
                            <Row>
                            <p className="about-text">I’m a UX/UI Designer and developer with four years of experience envisioning,
                                craftng and developing human centric digital interfaces. Working with customers,
                                understanding the needs of both the user and brand, and using analytical and creative thinking is my MO when
                                engineering unqiue solutions.
                                <br /> <br />
                                Currently I’m a masters student at Carnegegie Mellon’s College of Computer Science studying in the
                                Human Computer Interaction Institue. I will be receiving my Masters of Human Computer Interaction
                                in August of 2021. I am interested in new enhanced parallel and personalized interfaces as the serial process computer
                                interface of keyboard and mouse becomes outdated.
                            </p>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="linkedin-text">
                                        <a className="linkedin-link"href={'https://www.linkedin.com/in/piperhayden19/'} target="_blank">Linkedin</a>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="email-text">
                                        <p>Piper.1.Hayden@gmail.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutContent