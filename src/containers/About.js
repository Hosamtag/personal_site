import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hosam from './../images/hosamheadshot.JPG'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './../components/NavBar'
import MyHeader from './../components/myHeader'
import MyFooter from './../components/myFooter'

function About(){
    return(
        <div>
            <MyHeader />
            <NavBar />
        <div>
        <h1>About Me</h1>
        <Container fluid>
  <Row>
  <Col lg= {6}><img className = "aboutpic" src = {hosam} /></Col>
    <Col lg= {6}>
    <div class = "left aboutpadding">
            <p>I was born in Egypt and moved to Raleigh when I was 5 years old. I am currently a junior at Duke University majoring in Electrical & Computer Engineering and Computer Science.
                I am also obtaining a certificate in Innovation and Entrepreneurship with a focus on Technology and Design. 
                I am a member of the inaugural Cohort of the Clark Scholars at Duke, an engineering scholarship devoted to leadership, entrepreneurship, innovation and business.</p>
            <p>I am interested in Full Stack Development, Product Management, Machine Learning and Computer Engineering.</p>
            <p>In my free time, I like to read, lift weights, and play sports with friends.</p>
    </div>
    </Col>
  </Row>
  </Container>
        </div>
        <MyFooter/>
        </div>

    )
}

export default About