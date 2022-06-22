import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../images/pratt.png'
import './../styles/index.css';

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.style.overflowY = "scroll";
}

export default function NavBar(){
  return(
    <div className = "nav-wrapper-compressed">
      <div id = "compressedheader" className = "borderbottom">
          <div id = "myNav" className = "overlay">
            <button href = "#" className = "closebtn" onClick = {closeNav}>&#8594;</button>
              <div class = "overlay-content">
                <a href= "/about">ABOUT ME</a>
                <hr></hr>
                <a href = "/experiences">EXPERIENCES</a>
                <hr></hr>
                <a href = "/projects">PROJECTS</a>
                <hr></hr>
                <a href="/resume">RESUME</a>
                <hr></hr>
              </div>
          </div>
        <div className = "logopadding">
          <a className = "logopadding" href = "/"><img alt ="dukelogo" id = "Logocomp" src= {logo}></img></a>
        </div>
        <div className = "opennav">
          <button className = "opennav" onClick = {openNav}>&#9776;</button>
        </div>
      </div>
    </div>
  )
}