import React from "react";
import AboutContent from "../components/AboutComponents/AboutContent";
import HeroTwo from "../components/General/HeroTwo";

function AboutPage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle} />
            <AboutContent />
        </div>
    )
}
export default AboutPage;