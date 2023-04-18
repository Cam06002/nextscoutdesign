import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../src/images/logo.jpg';
import utilStyles from '../src/styles/utils.module.css';
import Image from 'next/image';

export default function SiteNavbar(){
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><div>
          <Image
            priority
            src={logo}
            className={utilStyles.borderCircle}
            height={100}
            width={100}
            alt=""
          />
        </div></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#demos'>Demos</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}