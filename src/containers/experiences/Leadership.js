import React from 'react'
import './../../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import stem1 from './../../images/stem1.jpg'
import shooting1 from './../../images/shooting1.jpg'
import floatingdock1 from './../../images/floatingdock1.jpg'
import shelton from './../../images/shelton.jpg'
import eagle from './../../images/eagle.jpg'
import nhs from './../../images/nhs.jpg'
import {Accordion, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../../components/ExperienceCard';
import { leadership } from '../../data/leadership';

export default function Leadership(props){
    return(
        <Card>
            <button class = "pointer" onClick = {props.scrollToTop}>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h2><FontAwesomeIcon icon={faGlobe} /> Service-Based Leadership</h2>
                </Accordion.Toggle>
            </button>
            <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <Container fluid>
                        <ExperienceCard logo = {stem1} list = {leadership.clark} />
                        <ExperienceCard logo={eagle} list = {leadership.eagle} />
                        <ExperienceCard logo = {nhs} list = {leadership.nhs} />
                        <ExperienceCard logo = {shelton} list = {leadership.shelton} />
                        <ExperienceCard logo = {shooting1} list = {leadership.bcClub} />
                        <ExperienceCard logo = {floatingdock1} list = {leadership.dock} />
                    </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}