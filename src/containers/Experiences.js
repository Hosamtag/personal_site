import React from 'react'
import './../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import dukelogo from './../images/prattlogo.jpeg'
import ixlogo from './../images/ixlogo.png'
import ghlogo from './../images/ghlogo.png'
import engen from './../images/Engen.JPG'
import ybm from './../images/ybm.png'
import ktob from './../images/ktob.png'
import ncsu from './../images/ncsu.jpg'
import stem1 from './../images/stem1.jpg'
import shooting1 from './../images/shooting1.jpg'
import floatingdock1 from './../images/floatingdock1.jpg'
import shelton from './../images/shelton.jpg'
import eagle from './../images/eagle.jpg'
import nhs from './../images/nhs.jpg'
import ece from './../images/ece110.png'
import egr from './../images/egr101.png'
import NavBar from './../components/NavBar'
import MyHeader from './../components/myHeader'
import MyFooter from './../components/myFooter'
import {Accordion, Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'

function Experiences(){
  function ScrolltoTop() {
    document.getElementById("academic").scrollIntoView();
  }
    return(
        <div>
            <MyHeader />
            <NavBar />
            <h1>Experiences</h1>
            <Accordion className = "width70">
  <Card>
  <a id = "academic" class = "pointer" onClick = {ScrolltoTop}><Accordion.Toggle as={Card.Header} eventKey="0">
      <h2><FontAwesomeIcon icon={faGraduationCap} /> Academic</h2>
    </Accordion.Toggle></a>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Container fluid>
  <Row>
    <Col lg= {6}><img className = "educationpic" src = {dukelogo} /></Col>
    <Col lg= {6}><h2 className = "exptitle">Duke University</h2>
    <ul className = "left">
      <li>Electrical & Computer Engineering and Computer Science Double Major</li>
      <li>Concentration in Machine Learning</li>
      <li>Innovation & Entrepreneurship Certificate</li>
      <li>Member of the Inaugural Cohort of the Clark Scholarship</li>
    </ul>
    </Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
  <Col lg= {6}><img className = "educationpic" src = {ixlogo} /></Col>
    <Col lg= {6}><h2 className = "exptitle">iXperience</h2>
    <ul className = "left">
      <li>10-week accelerator studying and interning in Product Management</li>
      <li>Skills built in product-market fit, value propositions, customer development, user experience design, prototyping, usability testing, tech stack, and product pitching</li>
      <li>Attended Product Management workshops biweekly to gain an in-depth understanding of Product Lifecycle, Lean Methodology, and role of a PM.</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row>
    <Col lg = {6}><img className = "educationpic" src = {ghlogo} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Green Hope High School</h2>
    <ul className = "left">
      <li>Student Body Vice President</li>
      <li>National Honor Society Vice President</li>
      <li>Soccer, Track, and Cross Country Athlete</li>
    </ul></Col>
  </Row>
  </Container>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <a class = "pointer" onClick = {ScrolltoTop}><Accordion.Toggle as={Card.Header} eventKey="1">
    <h2><FontAwesomeIcon icon={faCode} /> Technical</h2>
    </Accordion.Toggle></a>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Container fluid>
  <Row>
    <Col lg = {6}><img className = "educationpic" src = {engen} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Full-Stack Development Intern</h2>
    <ul className = "left">
      <li>Designed, architected and implemented an observation system using the 
MERN stack to assist entrepreneurs in using insight informed innovation
</li>
      <li>Developed Web Scraping and Natural Language Processing software using
Python to analyze inputted assets, offer insights and recommend new assets
</li>
      <li>Worked on image, video and audio processing and user authentication</li>
      <li>Work can be seen at (<a target = "_blank" href="https://ithree.herokuapp.com/" >https://ithree.herokuapp.com/</a>) </li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
  <Col lg = {6}><img className = "educationpic" src = {ybm} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Web Developer</h2>
    <ul className = "left">
      <li>Designed the front-end of the website (<a target = "_blank" href="https://yourbudgetmover.com/" >https://yourbudgetmover.com/</a>)
using the Bootstrap framework (HTML, CSS, Javascript, JQuery)
</li>
      <li>Developed the back-end system for the company managers to handle 
submissions from 10 different forms (Node.JS, Airtable)
</li>
    </ul></Col>
    
  </Row>
  <div className="vl"></div>
  <Row>
    <Col lg= {6}><img className = "educationpic" src = {ktob} /></Col>
    <Col lg= {6}><h2 className = "exptitle">Product Management Intern</h2>
    <ul className = "left">
      <li>Created a comprehensive list of over 70 major issues using “discover, identify,
solve” strategy to synthesize a successful MVP for the digital platform
</li>
      <li>Designed over 20 wireframes for Progressive Web Application and Internal
Management Dashboard to enrich the UX for employees and customers.
</li>
<li>Collaborated constantly with the software engineer for real-time product updates, which inspired my interest in software development</li>
<li>Work can be seen at (<a target = "_blank" href="https://fibreassist.co.za/" >https://fibreassist.co.za/</a>) </li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
  <Col lg= {6}><img className = "educationpic" src = {ece} /></Col>
    <Col lg ={6}><h2 className = "exptitle">Integrated Design Challenge</h2>
    <ul className = "left">
      <li>Designed and built a robot that completed a set of predetermined challenges
</li>
      <li>Coded the robot to succeed in the line following, color sensing and communication tasks
</li>
<li>My team of ten was the first to obtain a perfect score in the history of the 30 year competition
</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row>
    <Col lg = {6}><img className = "educationpic" src = {egr} /></Col>
    <Col lg ={6}><h2 className = "exptitle">First-Year Design Challenge</h2>
    <ul className = "left">
      <li>Worked on a team of five to design one set of physical therapy steps with adjustable height and depth of each step
</li>
      <li>Created four iterations of prototypes and tested each model in regards to efficiency and likelihood to fit the budget
</li>
<li>Designed software for steps to light up when the correct half is stepped on to motivate the alternating foot pattern
</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
  <Col lg= {6}><img className = "educationpic" src = {ncsu} /></Col>
    <Col lg ={6}><h2 className = "exptitle">NCSU BAE Engineering Design Intern</h2>
    <ul className = "left">
    <li>Designed and constructed solar-powered soil moisture sensors for use in western North Carolina with help from the Engineering team in the BAE department</li>
    <li>Evaluated the outputs from the sensors to determine optimal soil moisture levels in various regions across the state</li>
    </ul></Col>
  </Row>
  </Container>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <a class = "pointer" onClick = {ScrolltoTop}><Accordion.Toggle as={Card.Header} eventKey="2">
    <h2><FontAwesomeIcon icon={faGlobe} /> Service-Based Leadership</h2>
    </Accordion.Toggle></a>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Container fluid>
  <Row>
    <Col lg = {6}><img className = "educationpic" src = {stem1} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Clark Scholars Community Service Chair</h2>
    <ul className = "left">
      <li>Coordinate and plan group volunteer events with local organizations</li>
      <li>Organize STEM Leadership Camps for 50+ local middle school students</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
    <Col lg = {6}><img className = "educationpic" src = {eagle} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Eagle Scout</h2>
<ul className = "left">
      <li>Eagle Scout project consisted of building three picnic tables for a local Sunday School</li>
      <li>Planned/lead weekly meetings as Senior Patrol Leader</li>
      <li>Currently serving as the Chartered Organization Rep</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row>
      <Col lg = {6}><img className = "educationpic" src = {nhs} /></Col>
      <Col lg = {6}><h2 className = "exptitle">NHS VP of Service</h2>
      <ul className = "left">
      <li>Collected and recorded all the hours of over 100 students in the NHS totalling up to more than 2000 hours</li>
      <li>Reached out to organizations in the community for possible service opportunities </li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse">
    <Col lg = {6}><img className = "educationpic" src = {shelton} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Shelton Leadership Center</h2>
    <ul className = "left">
      <li>Facilitate reflections for my group consisting of 10 students following each leadership building activity</li>
      <li>Guide students through low and high ropes challenges and mentor their leadership development</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row>
    <Col lg = {6}><img className = "educationpic" src = {shooting1} /></Col>
    <Col lg = {6}><h2 className = "exptitle">Raleigh Boys and Girls Club: Shooting Range</h2>
    <ul className = "left">
      <li>Served as the project manager in the construction of two shooting windows (as pictured) and 5 shooting targets</li>
      <li>Developed skills in project management (including finances), construction and leading teams to accomplish tasks</li>
    </ul></Col>
  </Row>
  <div className="vl"></div>
  <Row className = "flex-lg-row-reverse"> 
    <Col lg = {6}><img className = "educationpic" src = {floatingdock1} /></Col>
    <Col lg ={6}><h2 className = "exptitle">Raleigh Boys and Girls Club: Floating Dock</h2>
    <ul className = "left">
      <li>Served as the construction manager in the construction of two floating docks to be put out into the lake</li>
      <li>Developed skills in construction, leading diverse teams, and defining problem criteria</li>
    </ul></Col>
  </Row>
  
  </Container>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
            <MyFooter />
            </div>

    )
}

export default Experiences