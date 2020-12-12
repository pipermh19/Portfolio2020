// Imported Components
import React from 'react';

//Project card content component
function ProjectsCardInfo(props){

    return(
        <div className='title-div'>
            { /* Project Title */}
            <p>{props.title}</p>
         </div>
    );

}

export default ProjectsCardInfo;