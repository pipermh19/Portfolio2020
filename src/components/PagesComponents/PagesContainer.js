// Imported Components
import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import PageCard from "./PageCard";

// Component to Hold Cards for pages. I.E. About, Work, Contact Page
class PagesContainer extends React.Component{

    //Holds state for cards
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: "ABOUT",
                    path: '/about',
                    selected:false
                },
                {
                    id: 1,
                    title: "WORK",
                    path: '/work',
                    selected:false
                },
                {
                    id: 2,
                    title: "CONTACT",
                    path: '/contact',
                    selected:false
                },
            ]
        }
    }

    //Creates Cards
    createItems = (items) => {
        return items.map(item => {
            return <PageCard item={item} key={item.id}/>
        })
    }

    //Container to hold cards
    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.createItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default PagesContainer;

