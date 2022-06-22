import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Accordion} from 'react-bootstrap'
import Academic from './experiences/Academic'
import Technical from './experiences/Technical'
import Leadership from './experiences/Leadership';

function scrollToTop() {
  document.getElementById("academic").scrollIntoView();
}

export default function Experiences(){
  return(
    <div>
      <Header />
      <NavBar />
      <h1>Experiences</h1>
      <Accordion className = "width70">
        <Academic scrollToTop={scrollToTop} />
        <Technical scrollToTop={scrollToTop} />
        <Leadership scrollToTop={scrollToTop} />
      </Accordion>
      <Footer />
    </div>
  )
}