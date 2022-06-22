import React from 'react'
import './../styles/index.css';

export default function Footer(){
    return(
<footer>
	<div className="container-fluid padding">
		<div className ="crimson row text-center">
			<div className ="col-12">
                <ul>
                    <li><a href = "/about">ABOUT ME</a></li>
                    <li><a href ="/experiences">EXPERIENCES</a></li>
					<li><a href ="/projects">PROJECTS</a></li>
                    <li><a href ="/resume">RESUME</a></li>
                </ul>
			</div>
			<div className =" nopadding col-12">
                <p className = "smaller"><a className = "footeremail" href = "mailto: hosamtageldin@gmail.com">hosamtageldin@gmail.com</a></p>
			</div>
			<div className ="col-12">
				<p className = "smaller grey">"If you're afraid to fail, then you're probably going to fail." - Kobe Bryant</p>
			</div>
		</div>
	</div>
</footer>
    )
}