import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import p90x from './../images/p90x.jpg'
import recent from './../images/recent.JPG'
import past from './../images/past.PNG'


export default function Fitness(){
    return(
        <div>
            <Header />
            <NavBar />
            <h1 className= "marginbottomless">Fitness</h1>
            <Container fluid>
                <Row>
                    <Col lg = {4}><img alt = "p90x" className = "fitnesspic" src = {p90x}></img>
                                </Col>
                    <Col lg = {4}>
                        <p className= "align">
                            P90X or my very first smartphone? This was the decision I found
                            myself facing at the end of the first semester of 7th grade.
                            My dad had promised me that if I received all As for the semester he would buy me anything that
                            I wanted. Every kid in my grade dreamed about having an iPhone and I was no different. However, I was always the unathletic one in my family,
                            mostly due to being 30 pounds overweight. I had been watching videos of people's 3 month transformations through P90X and I was more motivated
                            than ever to start my own fitness journey. After a long semester of studying and achieving my first ever honor roll, I ended up choosing P90X,
                            a <b>decision that would truly change my life forever.</b>
                        </p>
                    </Col>
                    <Col lg = {4}><img alt = "fitness pic past" className = "fitnesspic" src = {past}></img></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg = {4}></Col>
                    <Col lg = {4}> 
                        <p className = "align">The journey, however, started with a lot of pushback from my parents' 
                            friends. They all believed I was too young to be working out and that I could really
                            hurt myself in the process.
                            Thankfully, my parents trusted me. From my very first workout video to now, my life
                            has found a new meaning consisting of healthy eating, fitness, and a strong commitment to achieving my goals.
                        </p>
                    </Col>
                    <Col lg = {4}><img alt = "fitness pic recent"className = "fitnesspic" src = {recent}></img></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
