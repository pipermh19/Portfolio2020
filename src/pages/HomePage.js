import React from "react";
import HeroTwo from "../components/General/HeroTwo"
import PagesContainer from "../components/PagesComponents/PagesContainer";

function HomePage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle}/>
            <PagesContainer />
        </div>
    )
}
export default HomePage;