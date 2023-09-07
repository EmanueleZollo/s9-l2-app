import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => (
    <Navbar>
    <Nav>
        <Nav.Link href="#home">Shop</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
    </Navbar>
    );

    export default MyNav; 