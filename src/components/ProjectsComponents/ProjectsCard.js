// Imported Components
import React from 'react';
import { useSpring, animated} from 'react-spring';
import {Link} from "react-router-dom";
import ProjectsCardInfo from "./ProjectsCardInfo";

//Variables that track the x and y axes of your mouse as well as manipulates the card's position relative to mouse
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

//Card Component
function ProjectsCard(props){
    //Variable that holds classes for each card to allow for different background colors
    const id = "project-" + props.item.id;
    const classIDs = id  + " h-card";
    const [items, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return(
        <Link className="card-nav-link" to={props.item.path}>
            {/* React Spring Animated div to allow for card to act like it is 3D */}
            <animated.div  className={classIDs}
                           onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                           onMouseLeave={() => set({ xys: [0, 0, 1] })}
                           style={{ transform: items


                                   .xys.interpolate(trans) }}
            >
                <ProjectsCardInfo title={props.item.title}/>
            </animated.div>
        </Link>
    );
}

export default ProjectsCard;