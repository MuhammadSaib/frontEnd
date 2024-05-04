// Categories.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useState, useEffect } from 'react';
import './Categories.css'; 

const Categories = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(props.data);
    }, [props.data]); // Specify props.data as a dependency for useEffect

    return ( 
        <div className="row bg-grey p-0 m-0 justify-content-center">
            <div className="col-md-10 col-sm-8 col-10">
            <div className="h1 mb-5 mt-5 text-center pt-3 pb-2">Categories</div>
                <div className="row">
                    {data && data.map((item) => (
                        <div className="col-4 col-md-3 col-lg-2 round-div text-center" key={item.id}>
                            <img src={item.img} className='cimg' alt="CategoriesImage" />
                            <p className='cname'> {item.name} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Categories;
