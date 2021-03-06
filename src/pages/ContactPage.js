// Imported Components
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Axios from "axios";

import HeroTwo from "../components/General/HeroTwo";
import Content from "../components/General/Content";

//Component that holds contact form
class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleTextChange = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        })
        /*Axios.post('http://localhost:3030/api/email', this.state)
            .then(res =>{
                if(res.data.success){
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: true,
                        emailSent: false
                    })
                }
            })
            .catch(err =>{
                this.setState({
                    disabled: true,
                    emailSent: false
                })
            })*/

    }

    render(){
        return(
            <div>
                <HeroTwo title={this.props.title} />
                {/* Generic Container */}
                <Content>
                    {/* Contact Form */}
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text value" value={this.state.name} onChange={this.handleTextChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email Address</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleTextChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleTextChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" type="submit" disabled={this.state.disabled}>Send</Button>

                        {/* Display messages when the message sends or does not send */}
                        {this.state.emailSent === true && <p className="d-inline msg-success">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline msg-failed">Email Did Not Send</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}
export default ContactPage;