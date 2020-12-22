import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default class App extends React.Component {
  render() {
    return (
      <div class="main">
        <Navbar className="spacing main" expand="lg">
          <Navbar.Brand href="#home">
            Vivian Li
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Design Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Redesigning Harvard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">The Quell</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">My Art Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.0">Friends of Mice</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">A/B Testing</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="3D Animation Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/2.3">Always Right Short Film</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#resume"><a href="vivians_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div class="flex_column">
          <div class="flex_row">
            <img src="/images/paintbrush.png" alt="blah" class="decor" />
            <div class="spacing">
              <h1 className="black"> Heyo~ </h1>
              <div class="flex_row">
                <h1 className="black">It's</h1>
                <h1>  &nbsp;Vivian</h1>
              </div>
              <p className="black italic">Designer, teacher, and everything in between :)</p>
            </div>
            <img className="propic" src="/images/ProfilePic.JPG" alt="blah" />
            <img src="/images/pencil.png" alt="blah" class="pencil spacing" />
          </div>

          <div class="spacing top_margin black flex_column" id="link">
            <h1>About Me</h1>
            <p class="gborder ">I am currently a junior at Brown University studying Computer Science and Psychology with a minor in Education!
            You might be wondering what exactly is between being a designer and a teacher. Allow me to explain: my approach to design is largely pedagogical!
            Inspired by my 6 years of teaching 18 students, I realized that designing user experience is largely like lesson-planning:
            it should be engaging(captivating), contextualized(intuitive), and ultimately student-led(user-centered).
          
            <div class="flex_row spacing top_margin2">
                <div class="flex_column dark">
                  <h2 class="uline">UI/UX Design</h2>
                  <ul>
                    <li class="top_margin3">captivating design</li>
                    <li>intuitively constructed and used &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li>user-centered</li>
                  </ul>

                </div>

                <div class="flex_column otext">
                  <h2 class="uline">Lesson Planning</h2>
                  <ul>
                    <li class="top_margin3">make material engaging</li>

                    <li>contextualize based on the student's experience</li>

                    <li>encourage student-led learning</li>
                  </ul>

                </div>

              </div>
            </p>

          </div>



          <div class="projects flex_column" >
            <div className=" top_margin ">
              <h1 className="black"> Design Projects</h1>
            </div>


            <div class="flex_column" id="action/3.3">
              <a href="redesign.html" target="_blank" rel="noopener noreferrer">
                <h2 class="harvard">
                  Redesigning Harvard: Responsiveness Redesign
                </h2>
                <div class="black">
                  <p>I thought that my friend at Harvard's Theoretical Computer Science (typical.) class website could use a glow-up, so I delivered!</p>
                  <p>(If you are the professor of that website, well, no offense intended.)</p>
                </div>
              </a>
              <a href="redesign.html" target="_blank" rel="noopener noreferrer">
                <img class="harvard_img" src="/images/harvard_logo.png" alt="blah" ></img>
              </a>
            </div>

            <div class="flex_column top_margin" id="action/3.2">
              <a href="iterative.html" target="_blank" rel="noopener noreferrer">
                <h2 class="iterative">
                  The Quell: Iterative Design
              </h2>
                <div class="black">
                  <p>Using only The Quell's concept, a console that lets you game and exercise at the same time,
                  </p>
                  <p>my two friends and I designed our own website that could be used to promote the startup's product, 
                  </p>
                  <p>allow users to purchase the product, and enable users to contact the company with any questions of feedback</p>                  
                </div>
              </a>
              <a href="iterative.html" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="iterative_img" src="/images/Quell.png" alt="blah" ></img>
              </a>

            </div>

            <div class="flex_row top_margin" id="action/3.1">
              <a href="development.html" target="_blank" rel="noopener noreferrer">
                <h2 class="development">
                  My Art Cart: Creating my React App in Javascript
                </h2>
                <div class="black">
                  <p>Want to see some stuff I've drawn? Want to know when I drew it? What I drew it with? If it has won any awards?</p>
                  <p>Want to know how LONG it took me?</p>
                  <p>Well then, this should interest you ;)</p>
                </div>
              </a>
              <a href="development.html" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="development_img" src="/images/Project3_Image.png" alt="blah" ></img>
              </a>

            </div>

            <div class="flex_row top_margin" id="action/3.0">
              <a href="personas.html" target="_blank" rel="noopener noreferrer">
                <h2 class="personas">
                  Friends of Mice: Personas and Storyboarding
                </h2>
                <div class="black">
                  <p>How do you like your mice?</p>
                  <p>Simple, with dash of tech saviness in the form of a wireless USB?</p>
                  <p>Luxurious, with a sturdy wirecord as an appetizer, 8 rebindable buttons for the main course, and a splash of RGB LED lights for dessert?</p>
                  <p> Through this project, I investigated the different kinds of computer mice users and created personas and storyboards based on my interviews of real people</p>

                </div>
              </a>
              <a href="personas.html" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="personas_img" src="/images/color_mouse.jpg" alt="blah" ></img>
              </a>
            </div>
            <div class="flex_row top_margin" id="action/3.4">
              <a href="abtesting.html" target="_blank" rel="noopener noreferrer">
                <h2 class="abtesting">
                  A/B Testing
                </h2>
                <div class="black">
                  <p> People say that stores use the price tag $9.99 instead of $10 because it makes it looks cheaper</p>
                  <p> But is this really true? Are online shoppers REALLY more likely to buy items with the first price tag?</p>
                  <p> I let the stats speak for themselves</p>
                </div>
              </a>
              <a href="abtesting.html" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="abtesting_img" src="/images/anime_pic.png" alt="blah" ></img>
              </a>
            </div>
          </div>
          <div class="projects flex_column top_margin" id="action/2.3">
            <div className=" top_margin ">
              <h1 className="black"> 3D Animation Projects</h1>
            </div>
            <h2 class="film top_margin">
                  Always Right: A Short Film
              </h2>
            <iframe title="alwaysright" width="1280" height="720"
                src="https://www.youtube.com/embed/BPSvNsn7N08">
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}
