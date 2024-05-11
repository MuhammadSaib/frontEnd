import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Cart = () => {
    const user = JSON.parse(localStorage.getItem('user'))._id;
    const [data, setData] = useState(null);
    useEffect(() => {
        getData();
    },[]); 
    const getData = async () => {
        let result = await fetch('http://localhost:5000/get-cartProduct/' + user,{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
          }
        );
        if(result){
            result = await result.json();
            setData(result);
            console.log("showed");
        }
    }
    // const [quantity, setQuantity] = useState(props.quantity || 0);

    // const handleQuantityChange = (e) => {
    //     const newQuantity = parseInt(e.target.value);
    //     if (!isNaN(newQuantity) && newQuantity >= 0) {
    //         setQuantity(newQuantity);
    //     }
    // };

    const handleDelete = (itemId) => {
        // Filter out the item with the given itemId from the cart data
        const updatedData = data.filter(item => item.id !== itemId);
        setData(updatedData);
    };

    const handleOrderNow = async () => {
        const array = data.map(item => ({ product: item._id, quantity: item.Qty }));
        console.log(array);
        let result = await fetch('http://localhost:5000/add-order/' + user, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(array)
        });
        if(result){
            console.log('Order Added');
        }
    };

    return (
        <div className="col-11">
            <div className="row mt-sm-4 mb-sm-4 justify-content-center">
                {data && data.map((cartItem) => (
                    <div className="col-sm-10 border rounded p-3 mt-2 mb-2" key={cartItem._id}>
                        <div className="row">
                            <div className="col-sm-3 col-lg-2 d-flex justify-content-center mb-3 mb-md-0">
                                <img src={'http://localhost:5000/' + cartItem.photos[0]} width="140px" height="120px" alt="Product" className="img-fluid" />
                            </div>
                            <div className="col-sm-7 col-lg-8">
                                <h3>{cartItem.title}</h3>
                                <div className="highlight-section">
                                    <h4>{cartItem.highlights}</h4>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5>Quantity:</h5>
                                        <div className="h3">
                                            {cartItem.Qty}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-2">
                                        <button className="btn btn-danger" onClick={() => handleDelete(cartItem._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={handleOrderNow}>Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
