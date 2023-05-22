import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";


export default function NavLine() {
    return(
      <>
        <Navbar> 
          <Container>
            <Navbar>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link> 
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to="/makeup-member-classes">Class Sign-Up</Nav.Link>
                </Nav.Item>


              {/* <li><Link to="/">Home</Link></li> 
              <li><Link to="/About" >About</Link></li>
              <li><Link to="/makeup-members/makeup-member-classes" >Zoom Class</Link></li> */}

            </Navbar>
          </Container>
        </Navbar>
        </>
    )
}