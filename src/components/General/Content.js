// Imported Components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Generic container
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    render() {
       return(
       <Container ref={this.wrapper} fluid={true}>
            <Row className="justify-content-center">
                <Col lg={8} md={10} xs={11}>
                    {this.props.children}
                </Col>
            </Row>
        </Container>
       )
    }
}

export default Content;