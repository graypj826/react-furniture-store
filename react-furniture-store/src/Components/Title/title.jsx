import React, { Component } from "react"
import './style.css';
import { Container, Row, Col } from 'reactstrap';


class Title extends Component {
    render(){
        return(
            <Container fluid>
                <h1 className="title-component"> So You Think You Can Shop! </h1>
            </Container>    
        )
    }
}

export default Title;