import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import ProjectsCard from "./ProjectsCard"


class ProjectsContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: "Community On the Go",
                    path: '/CommunityPage',
                },
                {
                    id: 1,
                    title: "GoCorsicana",
                    path: '/GoCorsicanaPage',
                },
                {
                    id: 2,
                    title: "Tracker",
                    path: '/TrackerPage',
                },
                {
                    id: 3,
                    title: "Catalog",
                    path: '/CatalogPage',
                },
            ]
        }
    }


    createItems = (items) => {
        return items.map(item => {
            return <ProjectsCard item={item} key={item.id}/>
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
export default ProjectsContainer;

