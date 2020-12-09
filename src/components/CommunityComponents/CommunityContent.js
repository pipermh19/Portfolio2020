import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css"
import Col from "react-bootstrap/Col";
import { useSpring, animated } from 'react-spring';


import img1 from './assets/InitialPhoto.png';
import img2 from './assets/affinity.png';
import img3 from './assets/StoryBoards.png';
import img4 from './assets/Mobile-Home-List.png';
import img5 from './assets/Mobile-MyEvents.png';
import img6 from './assets/Mobile-Forum.png';
import img7 from './assets/Mobile-Messages.png';
import img8 from './assets/TAP.png';



function CommunityContent(){
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <Container fluid={true} className="justify-content-center">
            <animated.div style={props}>
                <Row className="initial-image-row community-image-main">
                    <Col className='justify-content-center initial-image-div' xs={10} md={8} lg={6}>
                        <img className="initial-image initial-mobile" src={img1} alt="image of the login page on a laptop"></img>
                    </Col>
                </Row>
            </animated.div>
            <Row className='justify-content-center title-row'>
                <Col data-aos="fade" className='justify-content-center' xs={11} md={10} lg={8}>
                    <h1>Community On the Go</h1>
                    <h3 className='subtitle'>The Community on the Go website creates a community-based platform for
                        Kelly Strayhorn Theater virtual events that facilitates interactions between participants and hosts
                        to increase engagement and reduce uncertainty about class expectations.</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" lg={8} md={10} xs={11} className='content-container first-container'>
                    <Row className="description-row">
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Background</h5>
                                <p>Kelly Strayhorn Theater (KST) is a performing arts center located in the East Liberty neighborhood of Pittsburgh, Pennsylvania.
                                As the expected experience changes for people, KST was interested in new opportunities and solutions for customer engagement.
                                <br /> < br/>
                                With Covid-19 accelerating the shift in mode of experience, our team took this opportunity to explore virtual events and platforms
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="description">
                                <h5>Role</h5>
                                <ul>
                                    <li>Project Manager: Janie Xue</li>
                                    <li>User Interface Designer: Lia Slaton </li>
                                    <li>User Experience Designer: Piper Hayden</li>
                                    <li>Lead User Experience Designer: Brent Hong</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center community-row-colored'>
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">Problem</p>
                </Col>
            </Row>
            <Row className='justify-content-center community-row-colored'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <div>
                        <p>Participants in virtual events experience struggle to engage with hosts and other participants
                            due to unknown social norms and fear of interrupting the host. Both hosts and participants feel disconnected
                            from each other, but still want to have interactions and build connections both inside and out of the virtual setting.</p>
                    </div>
                    <div>
                        <h5>Evidence</h5>
                        <p>“I like to go ‘thumbs up’ if you feel good, ‘thumbs down’ if you don’t but a lot of times cameras are off anyway.”</p>
                        <p>“I feel like other people impact my decision to attend and event and also my interest in a given event. The more friends attend, the more likely I will attend.”</p>
                        <p>“Virtual events definitely helped me get to know peers, but I think we bonded more over the group chats that we made.”</p>
                        <p>“It’s harder to know the expectations going in, so something simple like the formality of the event ... and what the other occupants will be wearing.”</p>
                    </div>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center'>
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">Research Methods</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <div>
                        <h5>Contextual Inquiry</h5>
                        <p>Our goal was to learn more about experience of hosting a virtual event.
                            We conducted five interviews that embedded directed storytelling within a semi-structured interview.
                            We chose directed storytelling as our primary contextual method to help us learn about the virtual
                            event-holding process. We asked specific questions about event set-up and preparation, chosen platform, how the host engaged with participants, technology utilization, and external equipment. The method was limited because it relied on participants’ memories of past events, which could distort the collected data. However, we believe that we successfully directed participants with questions that limited incorrect recollections.
                        </p>
                    </div>
                    <div>
                        <h5>Speed Dating</h5>
                        <p>As we explored solutions for our customers needs, we used a Speed Dating Method.
                            This method allowed us to explore possible futures with target users. Speed dating helped
                            reduce the risk of making a product which is not needed.</p>
                        <p>Our team created twelve storyboards which presented possible solutions which would help facilitate customer engagement.
                        We presented the storyboard to four different people and asked them leading questions about the scenario before them.We
                        then used the insight to choose the soltuion a customer would adopt.</p>
                    </div>
                    <div>
                        <h5>Think-Aloud Protocol</h5>
                        <p>Through out our research we used a think-aloud protocol. A think-aloud protocol is a method used in a variety of research areas in
                            which a person or a group of people are asked to verbalise their thought processes as they do a specific task which are then recorded.
                            We used this method for generative research as well as for insight into possible solutions</p>
                    </div>
                    <div>
                        <img className="community-image-middle" src={img8} alt="UFT Examples"></img>
                    </div>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center community-row-colored'>
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">Insight</p>
                </Col>
            </Row>
            <Row className='justify-content-center community-row-colored '>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <div className="internal-content-div">
                        <h4>Generative Research</h4>
                        <p>We were interested in learning about how people attend virtual events.
                            We used the think-aloud protocol while a user explored AirBnb’s website.</p>
                        <h5>Questions</h5>
                        <ul>
                            <li>Find a virtual event you would actually want to attend within the next week.
                                Pretend you would actually attend the event -- the virtual event needs to fit into your schedule,
                                and you would hypothetically need to pay for the event.</li>
                            <li>Find a virtual dance class to attend with your family around Thanksgiving.</li>
                            <li>You want to give a virtual experience to your friend for their birthday.
                                Your friend is only available in the evenings to take this class.
                                Find a virtual experience to gift to your friend.</li>
                        </ul>
                        <h5>Major Themes</h5>
                        <ol>
                            <li>Events should have a value proposition
                                <ul>
                                    <li>Users seemed to primarily think about which experiences could give them the most value, or add to their lives in some way.</li>
                                    <li> When promoting an event, prioritize the channels that allow users to determine if a given event will add value (reviews/ratings, photos/videos, descriptions, etc.)</li>
                                </ul>
                            </li>
                            <li>Virtual experience is worth less to users
                                <ul>
                                    <li>Users don’t enjoy virtual experiences as much, so they are less willing to pay for virtual experiences.</li>
                                    <li>We should mimic the in-person experience as much as possible, and carefully select the event platform.</li>
                                </ul>
                            </li>
                            <li>Filters are useful for finding events that match criteria
                                <ul>
                                    <li>Users utilize filters to find events of interest and events that fit their schedule.</li>
                                    <li>We should consider have filter options when displaying the events list.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <img className="community-image-middle" src={img2} alt="Affinity Board"></img>
                    </div>
                    <div className="internal-content-div">
                        <h4>Contextual Inquiry</h4>
                        <p>We wanted to learn how artists, streamers, and other event hosts utilize different platforms to conduct their events, as well as the pain points (and what is going well) for the artists/streamers. How artists define a successful virtual event was also
                            a key insight for us to gauge how streaming platforms may contribute to or inhibit the potential of a virtual class.</p>
                        <h5>Target Participants</h5>
                        <ul>
                            <li>Student dance class instructor</li>
                            <li>Pound (fitness) instructor </li>
                            <li>Private music lesson teacher</li>
                            <li>Yoga instructor</li>
                            <li>COO (Chief Operating Officer) of Aish Toronto, a Jewish Educational Program</li>
                        </ul>
                        <h5>Major Themes</h5>
                        <ol>
                            <li>Technological difficulties and limitations significantly reduce the quality of the event and the host’s ability to effectively run the event. The burden to find an appropriate platform and create “hacks” to adjust for these issues has fallen on the host.
                                <ul>
                                    <li>“If you’re trying to share a video over Zoom… it just stalls everyone’s internet and it’s a mess”</li>
                                    <li>“Issues because Skype couldn’t handle [video and audio streaming at the same time] at that point”</li>
                                </ul>
                            </li>
                            <li>Although hosts are willing to try a variety of strategies to increase participation, audience engagement in virtual events is still a challenge hosts face.
                                <ul>
                                    <li>“I like to go ‘thumbs up’ if you feel good, ‘thumbs down’ if you don’t but a lot of times cameras are off anyway”</li>
                                    <li>“No one interacts with me as a teacher”</li>
                                    <li>“[The] biggest issue is ‘I asked this before but it was never answered”</li>
                                </ul>
                            </li>
                            <li>Pre-event promotion plays a large factor into audience size and audience engagement during the event. Outside and organizational support helps increase audience attendance, therefore making the host feel more confident in their ability to deliver a successful virtual event.
                                <ul>
                                    <li>“Whenever the event is connected to something else … a lot of people show up”</li>
                                    <li>“I told all my friends that I’m hosting this event, and it’s my own choreo so I really cared about this one … but no one showed up”</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className='section-title-row justify-content-center'>
                <Col data-aos="fade" xs={12} md={10} lg={8}>
                    <p className="section-title">Solution</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <div className="internal-content-div">
                        <p>Virtual events create a disconnect -- participants are unsure of what to expect in a virtual format,
                            and they struggle to engage with the host and other attendees when they have to rely on technology
                            for developing new social interactions. The Community on the Go website creates a community-based
                            platform for Kelly Strayhorn Theater virtual events that facilitates interactions between
                            participants and hosts to increase engagement and reduce uncertainty about class expectations.
                        </p>
                        <h4>Speed Dating</h4>
                        <h5>Feedback</h5>
                        <ol>
                            <li>Engagement in virtual events is low because participants are uncomfortable speaking in large groups and directly asking
                                instructors questions. They are unsure about social norms and self-conscious about turning their videos on.</li>
                            <li>Participants don’t like interrupting the host during the event, even though in-person they might have.
                                Because of this, they have unanswered questions and don’t engage with the host.</li>
                            <li>Participants are more interested in getting to know other attendees or event hosts during recurring events.</li>
                            <li>Participants prefer to attend events with friends; as such, friends play a large role in determining what events
                                participants decide to attend. If the participant doesn’t know anyone at the event, they are less likely to attend.
                                The lack of accountability for attendance in virtual events leads to lower turnout and lower engagement.</li>
                        </ol>
                        <h5>Needs</h5>
                        <ol>
                            <li> Participants want to speak with other attendees without interrupting the host</li>
                            <li>For recurring events, there is a stronger desire to create rapport with the host and other attendees</li>
                            <li>Participants are uncertain about expectations at virtual events; they rely on the behavior
                                of other attendees to decide what the social norms are and follow those</li>
                            <li>Participants would like to attend events with friends or people they are already
                                comfortable with to chat and ask questions during the event</li>
                        </ol>
                    </div>
                    <div>
                        <img className="community-image-middle" src={img3} alt="Story Boards"></img>
                    </div>
                    <div className="internal-content-div">
                        <h4>Prototype</h4>
                        <h5>Lo-Fidelity</h5>
                            <p>We chose low-fidelity over mid/high-level fidelities because we want to evaluate our storyboard rather than the specific design details of our solution.
                                The low fidelity will allow the users to focus on their needs and the solution concept.
                                In addition, because most people will use their phones to navigate websites, we decided to go with a mobile-first approach to prototyping.</p>
                        <h5>High-Fidelity</h5>
                            <p> After testing the lo-fi prototype we found the following. Users were annoyed that they had to go to the event details page to register, instead of immediately registering for an event from the list of all events.
                                When trying to find more information about an event, participants were inclined to click on the name of the event or the event image.
                                Users were initially unsure about how to contact the host, as there was no indication that the chat button would connect the user to the host.
                                The chat icon at the bottom of the screen could be confusing for users, especially those less familiar with technology.
                                The lack of color made it difficult for users to determine what information was important on each page.
                            </p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col data-aos="fade" className='justify-content-center content-container' lg={8} md={10} xs={11}>
                    <Row>
                        <Col className='justify-content-center' lg={3} md={6} sm={6} xs={12}>
                            <img className="community-image" src={img4} alt="High Fidelity Prototype"></img>
                        </Col>
                        <Col className='justify-content-center' lg={3} md={6} sm={6} xs={12}>
                            <img className="community-image" src={img5} alt="High Fidelity Prototype"></img>
                        </Col>
                        <Col className='justify-content-center' lg={3} md={6} sm={6} xs={12}>
                            <img className="community-image" src={img6} alt="High Fidelity Prototype"></img>
                        </Col>
                        <Col className='justify-content-center' lg={3} md={6} sm={6} xs={12}>
                            <img className="community-image" src={img7} alt="High Fidelity Prototype"></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default CommunityContent