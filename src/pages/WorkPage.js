// Imported Components
import React from "react";
import ProjectsContainer from "../components/ProjectsComponents/ProjectsContainer";
import HeroTwo from "../components/General/HeroTwo";

//Component that holds all of the project cards
function WorkPage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle}/>
            <ProjectsContainer />
        </div>
    )

}

export default WorkPage;