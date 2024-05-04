import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown,Row,Col,Button } from 'react-bootstrap';
import './Enter.css';
const Enter = ({titleData,btnData,flag}) => {
    return ( 
        <div className="row mb-5 pb-5" style={{overflow:'hidden'}}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 col-xs-12">
                <div className="row justify-content-center">
                  <div className="col-9">
                    <div className="mt-5 size">
                        <div className="pt-5 mt-5">
                            <h2 className="text-center">Shop Shuttle</h2>
                            <p className="text-size  text-center">
                                Introducing Shop Shuttle, 
                                the ultimate destination for modern online shopping enthusiasts. 
                                Seamlessly blending convenience with efficiency, 
                                Shop Shuttle revolutionizes the way you shop by offering a curated selection of 
                                products at your fingertips. With a user-friendly interface and intuitive design, 
                                navigating through our vast array of categories—from fashion and electronics to beauty
                                and home essentials—is a breeze.
                                At Shop Shuttle, we understand the importance of a seamless shopping experience
                                , which is why we've prioritized simplicity every step of the way. Whether you're 
                                browsing for the latest fashion trends or searching for must-have gadgets, our platform 
                                ensures that every click brings you closer to finding exactly what you're looking for.
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
            </div> 
            <div className="col-lg-6 col-xl-6 col-md-12 col-xs-12 col-sm-12 col-12">     
                <div className="row mt-lg-5 pt-lg-5 justify-content-center">  
                   <div className="col-10" >  
                    <form action="">
                        <div className="" >
                        <div className="mt-3 pt-4" >
                         <div className="h3 text-center mb-4 ">{titleData}</div>   
                            <label htmlFor="" class="h6 ">Enter Email</label>
                            <input className='form-control' type="text" placeholder='@gmail.com' />
                        </div>
                        <div className="mt-5 ">
                            <label htmlFor="" class="h6 ">Enter Password</label>
                            <input className='form-control'  type="password" placeholder='Password'/>
                        </div>
                        {flag && <div className="mt-5">
                            <label htmlFor="" class="h6 ">Confirm Password</label>
                            <input className='form-control'  type="password" placeholder='Password'/>
                        </div>}
                        <div className="mt-5 text-center"><button style={{border:'none'}} class="p-2 rounded text-white bgGreen">{btnData}</button></div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Enter;