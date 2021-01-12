import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




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
              <NavDropdown title="3D Modelling and Animation Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/2.3">Always Right Short Film</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.4">3D Modelling My Watch</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Art Work" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1.1">Harold Parker Forest</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.2">Black Cloud</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.3">A Flash of Life</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.4">Off Stage</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.5">Red</NavDropdown.Item>
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

            <p>In addition to being a designer, I also aspire to work in the educational technology industry as another fusion of my two passions.</p>
          
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



          <div class="projects flex_column jumbo" >
            <div className=" top_margin ">
              <h1 className="black"> Design Projects</h1>
            </div>

                  <div class="flex_row">
                              <div className="spacing" id="action/3.3">
                              <Card style={{ width: '30rem' }} >
                    <Card.Img variant="top" src="/images/harvard_logo.png" />
                    <Card.Body>
                      <Card.Title><h2 class="harvard">
                                    Redesigning Harvard: Responsiveness Redesign
                                  </h2></Card.Title>
                      <Card.Text>
                      <div class="black">
                  <p>I thought that my friend at Harvard's Theoretical Computer Science (typical.) class website could use a glow-up, so I delivered!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  (If you are the professor of that website, well, no offense intended.)</p>
                </div>
    </Card.Text>
    <Button variant="primary" href="redesign.html" target="_blank" rel="noopener noreferrer">See More</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Skills: Low to High Fi Prototyping, Responsive Web Redesign</Card.Footer>
</Card>
            </div>

            <div className="spacing" id="action/3.2">
            <Card style={{ width: '30rem' }} >
  <Card.Img variant="top" src="/images/Quell.png" />
  <Card.Body>
    <Card.Title><h2 class="iterative">
                  The Quell: Iterative Design
                </h2></Card.Title>
    <Card.Text>
    <div class="black">
    <p>Using only The Quell's concept, a console that lets you game and exercise at the same time,
                  my two friends and I designed our own website that could be used to promote the startup's product, 
                  
                  allow users to purchase the product, and enable users to contact the company with any questions or feedback.</p>              
                </div>
    </Card.Text>
    <Button variant="primary" href="iterative.html" target="_blank" rel="noopener noreferrer">See More</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Skills: User Testing, Interactive Mockups (Figma)</Card.Footer>
</Card>
            </div>


            <div className="spacing" id="action/3.1"> 
            <Card style={{ width: '30rem' }} >
  <Card.Img variant="top" src="/images/Project3_Image.png" />
  <Card.Body>
    <Card.Title><h2 class="development">
    My Art Cart: Creating my React App in Javascript
                </h2></Card.Title>
    <Card.Text>
    <div class="black">
    <p>Want to see some stuff I've drawn? 

    </p>
      <p>Want to know when I drew it?</p>
      <p> What I drew it with? If it has won any awards? </p>
                  <p>Want to know how LONG it took me?</p>
                  <p>Well then, this should interest you ;)</p>             
                </div>
    </Card.Text>
    <Button variant="primary" href="development.html" target="_blank" rel="noopener noreferrer">See More</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Skills: React, Front-End Software Engineering</Card.Footer>
</Card>
            </div>
            <div className="spacing" id="action/3.0"> 
            <Card style={{ width: '30rem' }} >
  <Card.Img variant="top" src="/images/color_mouse.jpg" />
  <Card.Body>
    <Card.Title><h2 class="personas">
    Friends of Mice: Personas and Storyboarding
                </h2></Card.Title>
    <Card.Text>
    <div class="black">
    <p>How do you like your mice?</p>
                  <p>Simple, with dash of tech saviness with a wireless USB?</p>
                  <p>Luxurious, with a sturdy wirecord as an appetizer, 8 rebindable buttons for the main course, and a splash of RGB LED lights for dessert?</p>
                  <p> Through this project, I investigated the different kinds of computer mice users and created personas and storyboards based on my interviews of real people</p>       
                </div>
    </Card.Text>
    <Button variant="primary" href="personas.html" target="_blank" rel="noopener noreferrer">See More</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Skills: User Research, Personas, Storyboarding</Card.Footer>
</Card>
            </div>

            <div className="spacing" id="action/3.4"> 
            <Card style={{ width: '30rem' }} >
  <Card.Img variant="top" src="/images/anime_pic.png" />
  <Card.Body>
    <Card.Title><h2 class="abtesting">
    $9.99 vs $10: A/B Testing
                </h2></Card.Title>
    <Card.Text>
    <div class="black">
    <p> People say that stores use the price tag $9.99 instead of $10 because it makes it looks cheaper</p>
                  <p> But is this really true? Are online shoppers REALLY more likely to buy items with the first price tag?</p>
                  <p> I let the stats speak for themselves</p>     
                </div>
    </Card.Text>
    <Button variant="primary" href="abtesting.html" target="_blank" rel="noopener noreferrer">See More</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Skills: Significance Testing, Parsing/Cleaning User Logs</Card.Footer>
</Card>
            </div>
            
            


            </div>           

            
           
          </div>
          <div class="projects flex_column top_margin" >
            <div className=" top_margin ">
              <h1 className="black"> 3D Animation Projects</h1>
            </div>
            <div id="action/2.3">
              <h2 class="film top_margin">
                Always Right: A Short Film
              </h2>
              <p>Timeline: Nov 2020 - Dec 2020</p>
              <p>Software: Maya + Arnold</p>
              <iframe title="alwaysright" width="1280" height="720"
                src="https://www.youtube.com/embed/BPSvNsn7N08?autoplay=1">
              </iframe>
            </div>
            <div id="action/2.4">
              <h2 class="film top_margin">
                My Watch: A 3D Model
              </h2>
              <p>Timeline: Sept 2020 - Oct 2020</p>
              <p>Software: Maya + Arnold</p>
              <iframe title="mywatch" width="1280" height="720"
                src="https://www.youtube.com/embed/TSO2lOmohsQ?autoplay=1">
              </iframe>
            </div>
            <div class="flex_row space">
              <img class="watchpic" src="/images/SkagenFullFront.jpg" alt="blah" />
              <img class="watchpic" src="/images/WatchBack.jpg" alt="blah" />
              <img class="watchpic" src="/images/WatchFace.jpg" alt="blah" />
              <img class="watchpic" src="/images/SkagenClasp.jpg" alt="blah" />
              <img class="watchpic" src="/images/OtherClasp.jpg" alt="blah" />
              <img class="watchpic" src="/images/SkagenClaspSide.jpg" alt="blah" />
            </div>
          </div>
          <div class="projects flex_column top_margin" >
            <div className=" top_margin ">
              <h1 className="black"> Art Work</h1>
            </div>
            <div id="action/1.1" class="flex_column">
              <h2 class="top_margin">
                Harold Parker Forest
              </h2>
              <img className="art" src="/images/Forest.jpg" alt="blah" />
            </div>
            <div id="action/1.2" class="flex_column">
              <h2 class="top_margin">
                Black Cloud
              </h2>
              <img className="art" src="/images/Black.jpg" alt="blah" />
            </div>
            <div id="action/1.3" class="flex_column">
              <h2 class="top_margin">
                A Flash of Life
              </h2>
              <img className="art" src="/images/Flash.jpg" alt="blah" />
            </div>
            <div id="action/1.4" class="flex_column">
              <h2 class="top_margin">
                Off Stage
              </h2>
              <img className="art" src="/images/Stage.jpg" alt="blah" />
            </div>
            <div id="action/1.5" class="flex_column">
              <h2 class="top_margin">
                Red
              </h2>
              <img className="art" src="/images/Red.jpg" alt="blah" />
            </div>
            <div>
              <a href="https://sites.google.com/view/vivsliportfolio"><h3>To see more, come look at my art portfolio!</h3></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
