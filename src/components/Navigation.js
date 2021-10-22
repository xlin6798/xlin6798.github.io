import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
    const resume = "https://docs.google.com/document/d/1qS7xwupCF6DWgCswAJLxvq-_G2IqHRRDpWPJpQXJWC8/edit";
    return (
        <Navbar className="mx-5 fixed-top" expand="sm">
            <Navbar.Brand href="#home"> Xinyi Lin </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="" href="#projects"> Projects </Nav.Link>
                    <Nav.Link className="" href="#about"> About </Nav.Link>
                    <Nav.Link className="" href="#skills"> Skills </Nav.Link>
                    <Nav.Link className="" href={resume} target="_blank" > Resume </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
