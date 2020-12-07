import React from 'react';
import { useSpring, animated} from 'react-spring';
import {Link} from "react-router-dom";

import ProjectsCardInfo from "./ProjectsCardInfo";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function ProjectsCard(props){
    const id = props.item.id
    const [items, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return(
        <Link ClassName="card-nav-link" to={props.item.path}>
            <animated.div  className={'h-card'}
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