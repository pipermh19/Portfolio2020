import React from "react";

import ProjectsContainer from "../components/ProjectsComponents/ProjectsContainer";
import HeroTwo from "../components/General/HeroTwo";

function WorkPage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle}/>
            <ProjectsContainer />
        </div>
    )
}
export default WorkPage;