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
                    title: "GoCorsicana",
                    path: '/GoCorsicanaPage',
                },
                {
                    id: 1,
                    title: "Tracker",
                    path: '/TrackerPage',
                },
                {
                    id: 2,
                    title: "Catalog",
                    path: '/CatalogPage',
                },
                {
                    id: 3,
                    title: "Community On the Go",
                    path: '/CommunityPage',
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

