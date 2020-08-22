import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function MyHeader(){
    return(
        <header>
            <div>
        <div className = "hide-mobile">
        <div className = "container-fluid">
        <div className = "row">
            <div className ="first">
            <a href = "mailto: hosam.tageldin@duke.edu">hosam.tageldin@duke.edu</a>
            </div>
            <div className = "second center">
            </div>
            <div className = "third headersocial">
            <a href = "https://github.com/hosamtag" rel = "noopener noreferrer" target = "_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href = "https://www.linkedin.com/in/hosam-tageldin-182840128" rel = "noopener noreferrer" target = "_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
        </div>
    </div>
    <div className = "show-mobile">
        
                <div className = "centertext">
                <a className = "mail" href = "mailto: hosam.tageldin@duke.edu">hosam.tageldin@duke.edu</a>
                </div>
    
    </div>
    </div>
    
        </header>
    )
}

export default MyHeader
