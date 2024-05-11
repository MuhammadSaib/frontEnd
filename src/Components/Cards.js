 // Import Bootstrap CSS
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown,Row,Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css'; 
import '@fortawesome/fontawesome-free/css/all.css';


const Cards = ({data}) => {
    const [isPending, setPending] = useState(true);
    const [star,setStar]=useState(null);

    const HelperStar = (index,star) => {
      return index + 1 <= star ? "fa-solid fa-star" : index + 0.5 === star ? "fa-solid fa-star-half-stroke": "fa-regular fa-star";
    }
    
    const Find = (star) =>{
        const imageSource = new Array(5).fill(0).map((data, index) => HelperStar(index,star));
        return imageSource;
    }
    useEffect(() => {
        console.log(data);
        // console.log(props.data.rating);
        if(data && data.rating){
           setStar(data.rating);
        }
        setPending(false);
    }, []);
    return (
        <div className=" bg-grey pb-5">
        <div className="pt-5 m-0 p-0 row justify-content-center bg-grey pb-5">
         <div className="col-10">
         <div className="h1 mb-5 mt-5 text-center pt-3 p-2">Products</div>
          <div className="row" >
            {data && data.map((item) => (
                <div className="col-lg-2 col-xl-2 col-md-3 col-sm-12 col-xs-12 col-12"  key={item._id}>
                    <Link  style={{ textDecoration: 'none' }} to={"/cardDetail/" + item._id}><div className="p-2 mt-4  cart" >
                    <img src={`http://localhost:5000/${item.photos[0]}`} className="img-fluid" alt="There is an image" />
                    <p className="text-black title mt-1">{item.title}</p>
                    <div className="d-flex text-green">
                        <h5>Rs.</h5>
                        <h5 className='ms-1'>{item.price}</h5>
                    </div>
                    <div className="d-flex">
                    {/* {imageSource && imageSource.map((data, index) => <div key={index} className="ms-2"><i className={data} alt="Ratings icon" /></div>)} */}
                    {Find(item.rating).map((data,index) => (<div key={index} className="ms-1 text-yellow" style={{fontSize:'10px'}}><i className={data} alt="Ratings icon" aria-hidden="true" /></div>))}
                    </div>
                    </div></Link>
                </div>
            ))}
            </div>
          </div>
        </div>
        </div>
    )
}

export default Cards;

