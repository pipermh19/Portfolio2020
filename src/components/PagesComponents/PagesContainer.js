import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import PageCard from "./PageCard";

class PagesContainer extends React.Component{

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

    handleItemClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    createItems = (items) => {
        return items.map(item => {
            return <PageCard item={item} onClick={(e => this.handleItemClick(item.id, e))} key={item.id}/>
        })
    }

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

