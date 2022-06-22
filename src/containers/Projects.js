import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import ece from './../images/ece110.png'
import egr from './../images/egr101.png'
import engen from './../images/Engen.JPG'
import sfp from '../images/sfp.png'
import monopoly from './../images/monopoly.png'
import wator from './../images/WaTor.png'
import NavBar from './../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExperienceCard from '../components/ExperienceCard';
import { projects } from '../data/projects'

export default function Projects(){
    return(
        <div>
            <Header />
            <NavBar />
            <h1>Projects</h1>
            <Container>
                <ExperienceCard logo={sfp} list= {projects.sfp} />    
                <ExperienceCard logo={monopoly} list= {projects.monopoly} />
                <ExperienceCard logo={engen} list = {projects.engen} />
                <ExperienceCard logo={wator} list = {projects.simulation} />
                <ExperienceCard logo={ece} list = {projects.ece} />
                <ExperienceCard logo={egr} list = {projects.egr} />
            </Container>
            <Footer />
        </div>
    )
}