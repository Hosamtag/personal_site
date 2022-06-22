import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hosam from './../images/hosamheadshot.JPG'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
    return(
        <div>
            <Header />
            <NavBar />
            <div>
                <h1>About Me</h1>
                <Container fluid>
                    <Row>
                        <Col lg= {6}><img alt = "portrait of hosam" className = "aboutpic" src = {hosam} /></Col>
                        <Col lg= {6}>
                            <div class = "left aboutpadding">
                                <p>I was born in Egypt and moved to Raleigh when I was 5 years old. I am graduated from Duke University in 2022, with a double major in Electrical & Computer Engineering and Computer Science.
                                    I am currently a software engineer at Google working on Google Ad Manager. 
                                    I am a member of the inaugural cohort of the Clark Scholars at Duke, an engineering scholarship devoted to leadership, entrepreneurship, innovation and business.</p>
                                <p>I am interested in all aspects of software engineering, but my biggest passions are in full-stack and front end development.</p>
                                <p>In my free time, I like to read, lift weights, and play sports with friends.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}