import React from 'react'
import './../../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import ybm from './../../images/ybm.png'
import ktob from './../../images/ktob.png'
import ncsu from './../../images/ncsu.jpg'
import microsoft from './../../images/microsoft.png'
import google from '../../images/google.png'
import hubspot from '../../images/hubspot.jpg'
import cs from '../../images/dukeCS.jpg'
import {Accordion, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../../components/ExperienceCard';
import { technical } from '../../data/technical'

export default function Technical(props){
    return(
        <Card>
            <button class = "pointer" onClick = {props.scrollToTop}>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2><FontAwesomeIcon icon={faCode} /> Technical</h2>
                </Accordion.Toggle>
            </button>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Container fluid>
                        <ExperienceCard logo={google} list = {technical.google} />
                        <ExperienceCard logo={hubspot} list = {technical.hubspot} />
                        <ExperienceCard logo={microsoft} list = {technical.micro} />
                        <ExperienceCard logo={ybm} list = {technical.ybm} />
                        <ExperienceCard logo={cs} list = {technical.cs} />
                        <ExperienceCard logo={ktob} list = {technical.ktob} />
                        <ExperienceCard logo={ncsu} list = {technical.ncsu} />
                    </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}