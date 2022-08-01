
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='title'></div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" >도라에몽</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <div className="body">
        <div className='main-bg'>

        </div>
        <div className="product-display">
          <Container>
         
            <Row>
              <Col sm>도라에몽</Col>
              <Col sm>도라에몽</Col>
              <Col sm>도라에몽</Col>
            </Row>
          </Container>

        </div>
      </div>
    </div>
  );
}

export default App;
