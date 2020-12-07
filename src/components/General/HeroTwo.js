import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function HeroTwo(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid jumbotron-main">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8} xs={12}>
                        { props.title && <h1 className="hero-main">{props.title}</h1> }
                        { props.title && <h3 className="hero-second">{props.subTitle}</h3> }
                        { props.title && <h3 className="hero-third">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroTwo