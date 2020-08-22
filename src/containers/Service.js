import React from 'react'
import './../styles/index.css';
import NavBar from './../components/NavBar'
import MyHeader from './../components/myHeader'
import MyFooter from './../components/myFooter'

function Service(){
    return(
        <div>
            <MyHeader />
            <NavBar />
        <div>
            <h1>Service</h1>
            <ul>
                <li>
                    Clark Scholars Community Service Coordinator
                    -- Stem Leadership Camps
                </li>
                <li>
                    Floating Dock
                </li>
                <li>
                    Shooting Target Range
                </li>
                <li>
                    Eagle Scout Project
                </li>
                <li>
                    NHS and Cary Town Council
                </li>
            </ul>
        </div>
        <MyFooter />
        </div>

    )
}

export default Service