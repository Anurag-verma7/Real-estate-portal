import {Nav,NavDropdown,Navbar} from 'react-bootstrap'
import { ImOffice } from "react-icons/im";

const Navbars = () => {
    return(
      <div>
        <Navbar collapseOnSelect className="navbar fixed-top" expand="lg" bg="light" variant="light" style={{padding:"35px 0px"}}>
        <ImOffice style={{color:"black",fontSize:"30px",marginLeft:"20px"}}/>
        <Navbar.Brand href="#home" style={{marginLeft:"30px"}}>HomeCluster</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
             {/*  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
         </Nav>
         <Nav>
             <Nav.Link href="#features" className="mx-4">Advantages</Nav.Link>
             <Nav.Link href="#features" className="mx-4">Home</Nav.Link>
             <Nav.Link href="#features" className="mx-4">services</Nav.Link>
             <Nav.Link href="#features" className="mx-4">Properties</Nav.Link>
             <Nav.Link href="#features" className="mx-4">Testimonials</Nav.Link>
             <Nav.Link href="#features" className="mx-4">Blog</Nav.Link>
           
         </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );

}
export default Navbars;
