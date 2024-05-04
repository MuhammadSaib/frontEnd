import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown,Row,Col } from 'react-bootstrap';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Cards from './Components/Cards';
import AddProduct from './Components/AddProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Categories from './Categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';


function App() {
  const images = [
    'images/img1.jpeg',
    'images/img2.jpeg',
    'images/img4.jpeg',
];

let data1 = [
    { id: "C1", name: 'Electronics', img: 'images/img3.jpeg'},
    { id: "C2", name: 'Beauty', img: 'images/img3.jpeg'},
    { id: "C3", name: 'Mobiles', img: 'images/img3.jpeg'},
];
for (let i = 0; i < 12; i++) {
  data1.push({ id: `C${i + 4}`, name: 'Electronics', img: 'images/img3.jpeg' });
}
  // Initial data
let data = [
  {
      img: 'images/card1.webp',
      title: "Gothic Portrait Print T-shirt Aesthetic Y2K Crop Tops Short Sleevle Vest Tees Harajuku Streetwear White Suspenders Women Clothes",
      price: '5700',
      star:5
  },
  {
      img: 'images/card1.webp',
      title: "Gothic Portrait  Tees Har",
      price: '5700',
      star:4.5
  },
  {
      img: 'images/card1.webp',
      title: "Gothic Portrait Print Vest Tees Harajuku Streetwear White Suspenders Women Clothes",
      price: '5700',
      star:0
  },
  {
      img: 'images/card1.webp',
      title: "Gothic Portrae Vest Tees Harajuku Streetwear White Suspenders Women Clothes",
      price: '5700',
      star:2
  },
  {
      img: 'images/card1.webp',
      title: "Gothic Po Vest Tees Harajuku Streetwear White Suspenders Women Clothes",
      price: '5700',
      star:4
  },
  {
      img: 'images/card1.webp',
      title: "title6",
      price: '5700',
      star: 3
  },
  {
      img: 'images/card1.webp',
      title: "title7",
      price: '5700',
      star: 1
  },
];

// Generate more data
for (let i = 0; i < 93; i++) {
  data.push({
      img: 'images/card1.webp',
      title: `Title ${i + 8}`, // Incrementing from 8 to 100
      price: '5700',
      star:2.5
  });
}

console.log(data.length); // Should output 100

  return (
   
    <div className="App m-0 p-0">
     <Router>
     {/* <================ Header section Navbar start ===============> */}
    <header className="App-header m-0 p-0 positionStick">
      <Navbar className="navbar-color row justify-content-center m-0 p-0 " collapseOnSelect expand="lg">
        <div className="col-10 m-0 p-1">
          <div className="row">
            <div className="col-2">
             <Link to="/"><img src="images/logo1png.png" width="60px" className='img-fluid' alt="vgg" /></Link> 
            </div>
            <div className="col-lg-6 col-xl-6 col-md-8 col-sm-7 col-7 col-xs-7">
              <div className="input-group mt-md-3" style={{ border: '1px solid white', borderRadius: '10px 4px 4px 10px' }}>
                <input style={{ textDecoration: 'none', border: 'none' }} type="text" className="form-control" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="button">
                  <i className="text-white fa fa-search"></i> {/* Bootstrap Icons search icon */}
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-3 col-3 justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="fs-5" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=" m-0 p-0">
                  <Nav className="m-0">
                    <div className="m-2">
                      <i className="color-white fas fa-shopping-cart"></i>
                    </div>
                    <div className="ms-2">
                      <Nav.Link href="#pricing" className="color-white">Pricing</Nav.Link>
                    </div>
                  </Nav>
                  <Nav className="m-0 p-0">
                    <div className="ms-1">
                      <Nav.Link href="/login" className="color-white">Login</Nav.Link>
                    </div>
                    <div className="ms-1">
                      <Nav.Link href="/signup" className="color-white">Register</Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
    
  
     
   
   
     {/* <================ Header section Navbar End ===============> */}
     <Routes>
        <Route path="/" element={
        <>

        <div className="row  pt-5 bg-grey justify-content-center m-0 p-0">
          <div className="col-10 pt-3">
            <Carousel images={images} />
          </div>
        </div>
        <Categories data={data1} />
        <Cards data={data} />
        </>
      } />
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
     </Router>
     <div className="py-5 bg-light-grey">
    <div className="row pt-5 pb-5  m-0 justify-content-center">
     <div className="col-10 col-md-10 col-lg-10">
        <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-4 ">
                <h3 style={{ color: 'rgb(6, 158, 6)' }}>Customer Care</h3>
                <ul className="list-unstyled">
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Returns & Refunds</li>
                    <li>ShopShutter Shop</li>
                    <li>Purchase Protection</li>
                    <li>Daraz Pick up Points</li>
                </ul>
            </div>

            <div className="col-12 col-md-5 col-lg-4">
                <h3 style={{ color: 'rgb(6, 158, 6)' }}>ShopShutter</h3>
                <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>ShopShutter Shop</li>
                    <li>Make Money With Us</li>
                    <li>Sell on ShopShutter</li>
                    <li>ShopShutter Exclusive</li>
                </ul>
            </div>

            <div className='col-lg-4'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-lg-12">
                        <h3 style={{ color: 'rgb(6, 158, 6)' }}>Payment Methods</h3>
                        <div className="row r">
                            <div className="col-3 p-2 m-0">
                                <FontAwesomeIcon icon={faCreditCard} style={{ color: "#3036d9" }} size="2x" className="mx-2" />
                            </div>
                            <div className="col-3 p-2 m-0">
                                <FontAwesomeIcon icon={faMoneyCheckAlt} style={{ color: "#b14e0b" }} size="2x" className="mx-2" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-12 pt-lg-2 ">
                        <h3 style={{ color: 'rgb(6, 158, 6)' }}>Follow Us</h3>
                        <div className="row ">
                            <div className="col-3 p-2 m-0">
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" style={{ color: "blue" }} />
                            </div>
                            <div className="col-3 p-2 m-0">
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="col-3 p-2 m-0">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" style={{ color: "red" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
     </div>
  );
}
export default App;
