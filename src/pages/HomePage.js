// Imported Components
import React from "react";
import HeroTwo from "../components/General/HeroTwo"
import PagesContainer from "../components/PagesComponents/PagesContainer";

// Home page component that holds the pages component, as well as the title component
function HomePage(props){

    return(
        <div>
            <HeroTwo title={props.title} subTitle={props.subTitle}/>
            <PagesContainer />
        </div>
    )

}
export default HomePage;