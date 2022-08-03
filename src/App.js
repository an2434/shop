
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import {data} from './data';



function App() {

let [shose]=useState(data);
data.Map(function(a){});
  return (
    <div className="App">
      <div className="header">
        <div className='title'></div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" >NotShop</Navbar.Brand>
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
        <div className='main-bg'></div>
        
        <div className="product-display">
     
          <Container>
         
            <Row>
              <Col sm>
                <img className ='Goods' src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
                {shose[0].id}
                <h4 >{shose[0].title}</h4>
                <p>{shose[0].content}</p>
                <p>{shose[0].price}</p>
                </Col>
                <Col sm>
                <img className ='Goods' src="https://codingapple1.github.io/shop/shoes2.jpg"></img>
                <h4 >상품제목</h4>
                <p>상품설명</p>
                </Col>
                <Col sm>
                <img className ='Goods' src="https://codingapple1.github.io/shop/shoes3.jpg"></img>
                <h4 >상품제목</h4>
                <p>상품설명</p>
                </Col>
            </Row>
          </Container>

        </div>
      </div>
    </div>
  );
}

export default App;
