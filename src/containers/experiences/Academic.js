import React from 'react'
import './../../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap'
import dukelogo from './../../images/prattlogo.jpeg'
import ixlogo from './../../images/ixlogo.png'
import ghlogo from './../../images/ghlogo.png'
import {Accordion, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../../components/ExperienceCard';
import { academic } from '../../data/academic';

export default function Academic(props) {
    return(
        <Card>
            <button id = "academic" class = "pointer" onClick = {props.scrollToTop}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h2><FontAwesomeIcon icon={faGraduationCap} /> Academic</h2>
                </Accordion.Toggle>
            </button>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Container fluid>
                        <ExperienceCard logo={dukelogo} list = {academic.duke} />
                        <ExperienceCard logo={ixlogo} list = {academic.ix} />
                        <ExperienceCard logo={ghlogo} list = {academic.gh} />
                    </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}