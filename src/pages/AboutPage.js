//Imported Components
import React from "react";
import AboutContent from "../components/AboutComponents/AboutContent";
import HeroTwo from "../components/General/HeroTwo";

//The about page component that holds the about page content component and the title component
function AboutPage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle} />
            <AboutContent />
        </div>
    )

}
export default AboutPage;