import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../images/pratt.png'
import './../styles/index.css';

function NavBar(){
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.body.style.overflowY = "hidden";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.body.style.overflowY = "scroll";
  }
  return(
<div className = "nav-wrapper-compressed">
            <div id = "compressedheader" className = "borderbottom">
                <div id = "myNav" className = "overlay">
                    <a href = "#" className = "closebtn" onClick = {closeNav}>&#8594;</a>
                    <div class = "overlay-content">
                        <a href= "/about">ABOUT ME</a>
                        <hr></hr>
                        <a href = "/experiences">EXPERIENCES</a>
                        <hr></hr>
                        <a href = "/fitness" >FITNESS</a>
                        <hr></hr>
                        <a href="/resume">RESUME</a>
                        <hr></hr>
                        
                    </div>
                </div>
            <div className = "logopadding">
            <a className = "logopadding" href = "/"><img id = "Logocomp" alt = "Your Budget Movers Logo" src= {logo}></img></a>
            </div>
            <div className = "opennav">
            <a className = "opennav" onClick = {openNav}>&#9776;</a>
            </div>
  
      
            </div>
        </div>
  )
}


export default NavBar