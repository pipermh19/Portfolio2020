import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

function ContactContent() {

    return (
        <Container fluid={true} className="justify-content-center">
            <Row className="justify-content-center">
                <Col className="justify-content-center" xs={11} md={10} lg={8}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>

                        </Col>
                        <Col xs={12} md={6}>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactContent;