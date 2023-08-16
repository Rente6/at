import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarproj() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <div className="centro">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Produtos">Produtos</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Navbarproj;