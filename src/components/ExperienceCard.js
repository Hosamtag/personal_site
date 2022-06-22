import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Row, Col } from 'react-bootstrap'

export default function ExperienceCard(props) {
    return(
        <>
            <Row className = {props.list.class}>
                <Col lg= {6}><img alt = "pic" className = "educationpic" src = {props.logo} /></Col>
                <Col lg= {6}>
                    {!props.list.withIcon ? 
                        <h2 className = "exptitle">{props.list.title}</h2> : 
                        <h2 className = "exptitle">{props.list.title} 
                        {" "}<a href = {props.list.gitLink} rel = "noopener noreferrer" target = "_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            </a></h2>
                    }
                    
                    <ul className = "left">
                        {props.list.list.map(listItem=> 
                            <li>{listItem}</li>    
                        )}
                    </ul>
                </Col>
            </Row>
            <div className="vl"></div>
        </>
    )
}