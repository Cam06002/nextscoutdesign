import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../public/images/logo.jpg';
import utilStyles from '../src/styles/utils.module.css';
import Image from 'next/image';
import styles from '..//components/layout.module.css';

export default function SiteNavbar(){
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <div className={styles.header}>
                    <Image
                        priority
                        src={logo}
                        className={utilStyles.borderCircle}
                        height={100}
                        width={100}
                        alt=""
                    />
                    <h2 className={styles.gapper}>Reimaginig Your Business for the Web</h2>
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav.Link href='#home' className={styles.gapper}>Home</Nav.Link>
                    <Nav.Link href='#demos' className={styles.gapper}>Demos</Nav.Link>
                    <Nav.Link href='#contact' className={styles.gapper}>Contact</Nav.Link>
                    <Nav.Link href='#about' className={styles.gapper}>About</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}