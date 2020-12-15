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
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Redesigning Harvard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">The Quell</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">My Art Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.0">Friends of Mice</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Resume</NavDropdown.Item>
              </NavDropdown>
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
            <p>I am currently a junior at Brown University studying Computer Science and Psychology with a minor in Education! Thanks for coming💖 </p>
            <img src="/images/scene_pic.jpg" alt="blah" class=" project_image spacing" />
          </div>



          <div class="projects flex_column" >
            <div className=" top_margin ">
              <h1 className="spacing black">Projects</h1>
            </div>


            <div class="flex_column top_margin" id="action/3.3">
              <a href="https://warm-temple-50434.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h2 class="white">
                  Redesigning Harvard: Responsiveness Redesign
                </h2>
                <div class="black">
                  <p>I thought that my friend at Harvard's Theoretical Computer Science (typical.) class website could use a glow-up, so I delivered!</p>
                  <p>(If you are the professor of that website, well, no offense intended.)</p>
                </div>
              </a>
              <a href="https://warm-temple-50434.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img class="project_image" src="/images/harvard_logo.png" alt="blah" ></img>
              </a>
            </div>

            <div class="flex_column top_margin" id="action/3.2">
              <a href="https://glacial-cliffs-83766.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h2 class="white spacing">
                  The Quell: Iterative Design
              </h2>
                <div class="black">
                  <p>What's better than a console that let's you excercise and game at the same time?</p>
                  <p>A console that ALSO has its own streamline website to make it look even better!</p>
                </div>
              </a>
              <a href="https://glacial-cliffs-83766.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="project_image2" src="/images/Project1_Image.png" alt="blah" ></img>
              </a>

            </div>

            <div class="flex_row top_margin" id="action/3.1">
              <a href="https://peaceful-tor-21219.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h2 class="white">
                  My Art Cart: Creating my React App in Javascript
                </h2>
                <div class="black">
                  <p>Want to see some stuff I've drawn? Want to know when I drew it? What I drew it with? If it has won any awards?</p>
                  <p>Want to know HOW LONG IT TOOK ME??</p>
                  <p>Well then, this should interest you ;)</p>
                </div>
              </a>
              <a href="https://peaceful-tor-21219.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="project_image2" src="/images/Project3_Image.png" alt="blah" ></img>
              </a>

            </div>

            <div class="flex_row top_margin" id="action/3.0">
              <a href="https://infinite-shelf-66825.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h2 class="white">
                  Friends of Mice: Personas and Story Boarding
                </h2>
                <div class="black">
                  <p>How do you like your mice?</p>
                  <p>Simple, with dash of tech saviness in the form of a wireless USB?</p>
                  <p>Luxurious, with a sturdy wirecord as an appetizer, 8 rebindable buttons for the main course, and a splash of RGB LED lights for dessert?</p>

                </div>
              </a>
              <a href="https://infinite-shelf-66825.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="flex_column">
                <img class="project_image3" src="/images/color_mouse.jpg" alt="blah" ></img>
              </a>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
