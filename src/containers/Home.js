import React from 'react'
import './../styles/index.css';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDumbbell, faBriefcase, faUsers, faFile } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin, faGithub, faReact, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Home(){
    return(
            <div className = "pyramids">
                <div className = "buttons">
                    <h1 className= "homepage">Hello, I am Hosam Tageldin.</h1>
                    <div className = "hide-mobile">
                    <p>I'm {' '}
                    <Typical loop = {Infinity}
                    wrapper = "b"
                    loop = "no"
                    steps = {[
                        'an Aspiring Full-Stack Developer.',
                        1000,
                        'a Fitness Enthusiast.',
                        1000,
                        'an Egyptian-American Immigrant.',
                        1000,
                        'an Innovator who pushes the limits.',
                        1000,
                        'Always Learning.',
                        1000
                    ]} />
                    </p>
                    </div>
                    <div className = "homepage">
                    <a href = "https://github.com/hosamtag" rel = "noopener noreferrer" target = "_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href = "https://www.linkedin.com/in/hosam-tageldin-182840128" rel = "noopener noreferrer" target = "_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                <button className = "home"><a href = "/about">ABOUT ME <FontAwesomeIcon icon={faUser} /></a></button>
                <button className = "home"><a href ="/experiences">EXPERIENCES <FontAwesomeIcon icon={faBriefcase} /></a></button>
                <button className = "home"><a href ="/fitness">FITNESS <FontAwesomeIcon icon={faDumbbell} /></a></button>
                <button className = "home"><a href="/resume">RESUME <FontAwesomeIcon icon={faFile} /></a></button>
                <br></br>
                <p>Made with <FontAwesomeIcon icon={faReact} /> by Hosam Tageldin <a href = "https://github.com/hosamtag/personal_site" rel = "noopener noreferrer" target = "_blank"><FontAwesomeIcon icon={faGithubAlt} /></a></p>
                </div>
            </div>

    )
}

export default Home