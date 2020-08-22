import React from 'react'
import './../styles/index.css';
import NavBar from './../components/NavBar'
import MyHeader from './../components/myHeader'
import MyFooter from './../components/myFooter'
import brothers from './../images/brothers.JPG'
import sister from './../images/sister.JPG'
import parents from './../images/parents.JPG'

function Family(){
    return(
        <div>
            <MyHeader />
            <NavBar />
        <div>
            <h1>Family</h1>
            <img className = "educationpic" src = {brothers}></img>
            <img className = "educationpic" src = {sister}></img>
            <img className = "educationpic" src = {parents}></img>
            <ul>
                <li>
                    Impact parents have had
                </li>
                <li>
                    Abdo and Amr
                </li>
                <li>
                    Jana
                </li>
            </ul>
        </div>
        <MyFooter />
        </div>

    )
}

export default Family