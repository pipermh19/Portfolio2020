// Imported Components
import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css"
import Col from "react-bootstrap/Col";
import { useSpring, animated } from 'react-spring';

//Imported Images
import img2 from "./assets/catalogDesktop.gif"
import img3 from './assets/cataloglapmob.png'
import img4 from './assets/catalog1mobile.png'
import img5 from './assets/catalog2mobile.png'
import img1 from './assets/laptop_Catalog.png'



function CatalogContent(){
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <Container fluid={true} className="justify-content-center">
            {/* Project Content */}
            <animated.div style={props}>
                <Row className="initial-image-row catalog-image">
                    <Col className='justify-content-center initial-image-div' xs={10} md={8} lg={6}>
                        <img className="initial-image" src={img1} alt="laptop image of catalog application"></img>
                    </Col>
                </Row>
            </animated.div>
            <Row className='justify-content-center title-row'>
                <Col data-aos="fade" className='justify-content-center' xs={11} md={10} lg={8}>
                    <h1>Customer Catalog</h1>
                    <h3 className='subtitle'>Customer Catalog is an application in the GoCorsicana Portal that that allows sales reps to maintain their customer’s catalogs.</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" lg={8} md={10} xs={11} className='content-container first-container'>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Reasoning</h5>
                                <p>The sales team used three different software services to maintain their customer’s business.
                                    To consolidate the number of programs that the sales team was using, an interface for customer catalogs was integrated into the GoCorsicana portal.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Approach</h5>
                                <p>To create the application my team’s business analyst and lead architect outlined the
                                    infrastructure and requirements of the application. Once the processes and requirements were established, I designed a low fidelity mock-up using photoshop and XD. My team members
                                    and I decided on the best user interface. The final mock-ups were given to an outsourced team who handled the development.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Objective</h5>
                                <p> To create a mobile responsive application that allows
                                    sales reps to maintain their customer’s catalogs.</p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Role</h5>
                                <ul>
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
                    <p className="section-title">Designs</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={img2} alt="scrolling through catalog"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <img className="image" src={img3} alt="desktop catalog view"></img>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' md={6} xs={12}>
                            <img className="image" src={img4} alt="mobile view of deleting item"></img>
                        </Col>
                        <Col className='justify-content-center' md={6} xs={12}>
                            <img className="image" src={img5} alt="mobile view of adding item"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default CatalogContent