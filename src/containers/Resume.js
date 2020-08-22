import React from 'react'
import './../styles/index.css';
import NavBar from './../components/NavBar'
import MyHeader from './../components/myHeader'
import MyFooter from './../components/myFooter'
import icon from './../images/icon.JPG'

function Resume(){
    return(
        <div>
        <MyHeader />
        <NavBar />
        <div>
            <h1>RESUME</h1>
            <p>Click on the<img src={icon}></img> icon at the bottom to download the resume.</p>
            <iframe src="https://onedrive.live.com/embed?cid=334852764AB4C62F&resid=334852764AB4C62F%21120&authkey=AKFaDq-FCBZNSn8&em=2" width={"750px"} height={"975px"} frameborder="0" scrolling="yes" style={{ border: '1px solid black' }}></iframe>
        </div>
        <MyFooter />
        </div>
    )
}

export default Resume