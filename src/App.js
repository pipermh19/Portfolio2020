//Components
import React from 'react';
import { render } from 'react-dom'
import {BrowserRouter as HashRouter, Route, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//Application Styling Sheets
import './App.css';
import './projectStyling.css';

//Application Pages
import Footer from './components/General/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from "./pages/WorkPage";
import GoCorsicanaPage from "./pages/GoCorsicanaPage";
import TrackerPage from "./pages/TrackerPage";
import CatalogPage from "./pages/CatalogPage";
import CommunityPage from "./pages/CommunityPage";

//Main application page
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Piper Hayden",
      navLinks:[
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
        { title: 'Contact', path: '/work'},
      ],
      home: {
        title: 'Piper Hayden',
        subTitle: "Designing Human-Centric Experiences",
      },
      about: {
        subTitle: 'Hi I\'m Piper',
      },
      contact: {
        title: 'Let\'s Connect'
      },
      work: {
        title: 'Projects'
      },
    }
  }

  render() {
    return (

      <HashRouter basename='/'>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Link to="/"> <Navbar.Brand>PIPER HAYDEN</Navbar.Brand> </Link>
            {/* Top Navigation */}
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/work">Work</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          {/* Routing for each page */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text}  />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.subTitle} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/work" render={() => <WorkPage title={this.state.work.title} />} />
          <Route path="/GoCorsicanaPage" render={() => <GoCorsicanaPage/>} />
          <Route path="/TrackerPage" render={() => <TrackerPage/>} />
          <Route path="/CatalogPage" render={() => <CatalogPage/>} />
          <Route path="/CommunityPage" render={() => <CommunityPage/>} />

          {/*<Footer />*/}

        </Container>
      </HashRouter>
    );
  }

}

export default App;
