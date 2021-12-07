import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import './Navbar.css'
// <nav className={navba ? 'navbar navbar-expand-lg navbar-dark bg-purple' : 'navbar navbar-expand-lg navbar-light bg-transparent'}>
//     <div className="container-fluid">
//         <button className="navbar-toggler px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <a className="navbar-brand px-2 m-0" href="about">Tienda3D</a>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="about">Inicio</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="about">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a className="dropdown-item" href="about">Action</a></li>
//                         <li><a className="dropdown-item" href="about">Another action</a></li>
//                         <li><hr className="dropdown-divider" /></li>
//                         <li><a className="dropdown-item" href="about">Something else here</a></li>
//                     </ul>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="about">Disabled</a>
//                 </li>
//             </ul>
//             <form className={navba ? 'd-flex input-group search-bar-box' : 'd-flex input-group search-bar-box transparent'}>
//                 <button className="btn fas fa-search shadow-none" type="submit"></button>
//                 <input className="form-control form-control-sm border-0 shadow-none" type="search" placeholder="Search" aria-label="Search" />
//             </form>
//             <button className="btn fas fa-shopping-cart shadow-none" type="submit"></button>
//         </div>
//     </div>
// </nav>

function NavbarComponent() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        }
    
        else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
        
        return (
            <Navbar expand="lg" className={navbar ? 'navbar navbar-expand-lg navbar-dark bg-purple' : 'navbar navbar-expand-lg navbar-light bg-transparent'}>
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className={navbar ? 'd-flex input-group search-bar-box' : 'd-flex input-group search-bar-box transparent'}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 form-control-sm border-0 shadow-none"
                                aria-label="Search"
                            />
                            <Button variant="flat" className="btn-border-none fas fa-search shadow-none"></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    
}
export default NavbarComponent;

