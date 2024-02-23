import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';




function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-success  shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand font-bold fw-semibold text-uppercase text-light'>
              Food
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 '>
              <Nav.Link href='/' className='active text-uppercase font-bold text-light'>Home</Nav.Link>
              <Nav.Link href='https://food-two-tan.vercel.app/' className='text-uppercase font-bold text-light'>WebApp</Nav.Link>
              <Nav.Link href='https://food-admin-sigma.vercel.app/login' className='text-uppercase font-bold text-light'>Admin</Nav.Link>
              <Nav.Link href='https://qrcode-seven-theta.vercel.app' className='text-uppercase font-bold text-light'>QrCode</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
         
      </Navbar>


      <Routes>
  
      
        <Route path='/' element={<Home />} />
        <Route path='/app' element={<App />} />
        
        
        
      </Routes>
      

      
    </div>
  );
}

export default App;